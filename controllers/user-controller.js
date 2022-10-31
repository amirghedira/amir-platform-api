const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const Notification = require('../models/Notification');
const Project = require('../models/Project');
const Banned = require('../models/Banned');
const { s3delete } = require('../middlewares/S3Upload');


exports.uploadCv = (req, res) => {
    User.findOne()
        .exec()
        .then(async (user) => {
            if (user.cvFile) {
                let cvFileLink = user.cvFile.split('/')[4].split('.')[0];
                await s3delete(cvFileLink)

            }
            User.updateOne({ _id: req.user.userid }, { $set: { cvFile: req.file.location } })
                .then(() => {
                    res.status(200).json({ fileUrl: req.file.location })
                })

        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: err })
        })
}
exports.getUser = (req, res) => {
    User.findOne()
        .select('-__v -password')
        .exec()
        .then(User => {
            res.status(202).json(User)
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })

}

exports.getConnectedUser = async (req, res) => {

    try {
        const user = await User.findOne()
        const notifications = await Notification.find()
        const projects = await Project.find()
        const banned = await Banned.find()
        res.status(200).json({ user, notifications, projects, banned })
    } catch (error) {
        res.status(500).json({ error })
    }

}

exports.updateUser = (req, res) => {
    let ops = {};
    for (let obj of req.body) {
        ops[obj.propName] = obj.value
    }

    User.updateOne({ _id: req.user.userid }, { $set: ops })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.updatePassword = (req, res) => {
    User.findOne({ username: req.body.username })
        .select('password')
        .exec()
        .then(user => {
            bcrypt.compare(req.body.oldpassword, user.password)
                .then(result => {
                    if (result) {
                        bcrypt.hash(req.body.password, 5)
                            .then(hash => {

                                User.updateOne({ _id: req.user.userid }, { $set: { password: hash } })
                                    .then(response => {
                                        res.status(200).json({ message: 'Password successfully updated' })
                                    })
                                    .catch(err => {
                                        res.status(500).json({ qqq: err })
                                    })
                            })
                            .catch(err => {
                                res.status(400).json({ error: err })
                            })
                    } else
                        res.status(409).json({ message: 'Actual password is wrong' })
                })
                .catch(err => {
                    res.status(500).json({ error: err })
                })
        })
        .catch(err => {
            res.status(500).json({ error: "on users found" })
        })
}

exports.login = (req, res) => {

    User.findOne({ username: req.body.username })
        .exec()
        .then(user => {
            if (user) {
                const password = user.password
                bcrypt.compare(req.body.password, password)
                    .then(passresult => {
                        if (passresult) {

                            const token = jwt.sign(
                                {
                                    username: user.username,
                                    userid: user._id
                                }, process.env.JWT_SECRET)
                            res.status(200).json({ message: 'You are successfully logged in', token: token })
                        }

                        else
                            res.status(201).json({ message: 'Wrong password, Try again!' })
                    })
                    .catch(err => {
                        res.status(404).json({
                            error: err
                        })
                    })
            } else {

                res.status(202).json({
                    message: 'Aucun utilisateur avec se nom'
                })
            }

        })
        .catch(err => {
            res.status(404).json({
                error: err
            })
        })
}
exports.updateProfileImg = async (req, res) => {
    await s3delete(req.body.oldimagelink)
    User.updateOne({ _id: req.user.userid }, { $set: { profileimage: req.file.location } })
        .then(result => {
            res.status(200).json({ imageurl: req.file.location })
        })
        .catch(err => {
            res.status(400).json(err)
            console.log(err)
        })

}

exports.updateBackgroundImg = async (req, res) => {
    await s3delete(req.body.oldimagelink)
    User.updateOne({ _id: req.user.userid }, { $set: { backgroundimage: req.file.location } })
        .then(result => {
            res.status(200).json({ imageurl: req.file.location })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.updloadImages = (req, res) => {
    User.updateOne({ _id: req.user.userid }, { $push: { images: req.file.location } })
        .then(result => {
            res.status(200).json({ imageurl: req.file.location })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.deleteImage = async (req, res) => {
    await s3delete(req.body.imagelink)
    User.updateOne({ _id: req.user.userid }, { images: req.body.images })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}
exports.updateNews = (req, res) => {
    User.updateOne({ _id: req.user.userid }, { $set: { news: req.body.news } })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}
exports.postNews = (req, res) => {

    const id = new mongoose.Types.ObjectId();
    const date = new Date().toISOString()
    User.updateOne({ _id: req.user.userid }, { $push: { news: { _id: id, title: req.body.title, content: req.body.content, date: date } } })
        .then(result => {
            res.status(200).json({ _id: id, date: date })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.addSkill = (req, res) => {
    let id = new mongoose.Types.ObjectId()
    User.updateOne({ _id: req.user.userid }, {
        $push: {
            skills:
                { _id: id, icon: req.file.location, description: req.body.description }
        }
    })
        .then(result => {
            res.status(200).json({ skill: { _id: id, icon: req.file.location, description: req.body.description } })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })

}

exports.deleteSkill = (req, res) => {
    User.findOne({ _id: req.user.userid })
        .exec()
        .then(user => {
            const index = user.skills.findIndex(skill => { return skill._id.toString() === req.params.id })
            let imageurl = user.skills[index].icon.split('/')[4].split('.')[0];
            user.skills.splice(index, 1)
            user.save()
                .then(async (result) => {
                    await s3delete(imageurl)
                    res.status(200).json({ skills: [...user.skills] })

                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json({ error: err })
                })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: err })
        })

}