const Project = require('../models/Project');
const mongoose = require('mongoose');
const { s3delete } = require('../middlewares/S3Upload');
const updateGitRepoReadme = require('../middlewares/updateGitRepoReadme');


exports.searchProject = (req, res) => {
    Project.find({
        $or: [
            {
                name: { $regex: `(?:${req.query.searchTerm.split(' ').join('|')})`, $options: 'i' }
            }
            ,
            {
                technologie: { $regex: `(?:${req.query.searchTerm.split(' ').join('|')})`, $options: 'i' }
            }
        ]
    })
        .sort({ date: 1 })
        .exec()
        .then(projects => {
            res.status(200).json({ projects })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ err })
        })
}
exports.getProjects = (req, res) => {
    Project.find()
        .select('name imagesurl date status filelink github summary technologie')
        .sort({ date: 1 })
        .exec()
        .then(result => {
            res.status(200).json({
                result
            })
        })
        .catch(err => {
            res.status(500).json({ err })
        })
}

exports.getProject = (req, res) => {
    Project.findOne({ _id: req.params.id }, {})
        .exec()
        .then(result => {
            if (result)
                res.status(200).json({ result })
            else
                res.status(404).json({ message: 'Project not found' })
        })
        .catch(err => {
            res.status(500).json({ err })
        })
}
exports.addProject = (req, res) => {
    const urls = req.files.map(file => { return file.location })
    const id = new mongoose.Types.ObjectId();
    const date = new Date().toISOString();
    const product = new Project({
        _id: id,
        name: req.body.name,
        started: req.body.started,
        date: date,
        overview: req.body.overview,
        whatlearned: req.body.whatlearned,
        technologie: req.body.technologie,
        documentation: req.body.documentation,
        commentsCount: 0,
        gitViewers: 0,
        downloadcount: 0,
        status: req.body.status,
        summary: req.body.summary,
        platform: req.body.platform,
        features: req.body.features,
        github: req.body.github,
        filelink: req.body.filelink,
        imagesurl: urls,
        comments: []
    })
    product.save()
        .then(result => {
            res.status(200).json({ _id: id, date: date, imagesurl: urls })
        })
        .catch(err => {
            console.log(err)
            res.status(400).json({ error: err })
        })
}

exports.updateProject = async (req, res) => {
    try {
        let ops = {};

        ops[req.body.propName] = req.body.value
        const project = await Project.findByIdAndUpdate(req.params.id, { $set: ops })
        if (req.body.propName == "documentation") {
            updateGitRepoReadme(project.github, req.body.value)
        }
        res.status(200).json({ message: "project updated" })
    } catch (error) {
        res.status(500).json({ error: err })

    }
}

exports.deleteProject = async (req, res) => {
    const project = await Project.findById(req.params.id)
    project.imagesurl.forEach(async (image) => {
        await s3delete(image);
    });
    return res.status(200).json({ message: 'project successfully deleted' })

}

exports.postComment = (req, res) => {

    const date = new Date().toISOString()
    const newComment = { _id: new mongoose.Types.ObjectId(), ip: req.body.comment.ip, autor: req.body.comment.autor, content: req.body.comment.content, date: date }
    Project.updateMany({ _id: req.params.id }, { $push: { Comments: newComment }, $set: { commentsCount: req.body.commentsCount } })
        .then(result => {
            res.status(200).json({ _id: newComment._id, date: date })
        })
        .catch(err => {
            res.status(404).json(err)
        })
}

exports.updateDownloads = (req, res) => {
    Project.updateOne({ _id: req.params.id }, { $set: { downloadcount: req.body.downloadcount } })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(404).json(err)
        })
}

exports.updateGitViewers = (req, res) => {
    Project.updateOne({ _id: req.params.id }, { $set: { gitViewers: req.body.gitviewers } })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            console.log(err)
            res.status(404).json(err)
        })
}

exports.deleteComment = (req, res) => {
    Project.updateMany({ _id: req.params.id }, { $set: { Comments: req.body.Comments, commentsCount: req.body.commentsCount } })
        .exec()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(404).json(err)
        })
}

exports.addProjectImage = (req, res) => {

    const urls = req.files.map(file => { return file.location })
    Project.updateOne({ _id: req.params.id }, { $push: { imagesurl: urls } })
        .then(result => {
            res.status(200).json({ imageurls: urls })
        })
        .catch(err => {
            res.status(404).json(err.message)
        })
}

exports.deleteProjectImage = async (req, res) => {

    await s3delete(req.body.imagetodelete)
    Project.updateOne({ _id: req.params.id }, { $set: { imagesurl: req.body.newimages } })
        .then(result => {
            res.status(200).json({ result: 'done' })
        })
        .catch(err => {
            res.status(404).json(err)
        })
}