const Topic = require('../models/Topic');
const mongoose = require('mongoose');
const CheckConnectedUser = require('../utils/CheckConnectedUser');

exports.getTopics = (req, res) => {

    Topic.find()
        .select(' -__v')
        .exec()
        .then(contents => {

            res.status(200).json({ result: contents })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.getQuestions = (req, res) => {

    Topic.find({ type: 'questions' })
        .populate('addedBy')
        .select(' -__v')
        .exec()
        .then(contents => {

            res.status(200).json({ result: contents })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.getSuggestions = (req, res) => {

    Topic.find({ type: 'suggestions' })
        .populate('addedBy')
        .select(' -__v')
        .exec()
        .then(contents => {

            res.status(200).json({ result: contents })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.getTopic = (req, res) => {

    Topic.findById(req.params.id)
        .populate('addedBy')
        .populate("replies.addedBy")
        .exec()
        .then(result => {
            if (result)
                res.status(200).json({ result: result })
            else
                res.status(404).json({ message: 'Topic not found' })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })

}

exports.postTopic = async (req, res) => {

    const currentUser = CheckConnectedUser(req)
    const topic = new Topic({
        ip: req.body.ip,
        title: req.body.title,
        autor: currentUser ? null : req.body.autor,
        content: req.body.content,
        addedBy: currentUser?.userid,
        date: new Date().toISOString(),
        type: req.body.type,
        state: true,
        pin: false,
        replies: []
    })
    let createdtopic = null
    try {
        createdtopic = await topic.save()
        res.status(200).json({ id: createdtopic._id })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: err })
    }
}

exports.postComment = async (req, res) => {
    try {
        let id = new mongoose.Types.ObjectId()
        let date = new Date().toISOString();
        const currentUser = CheckConnectedUser(req)
        await Topic.updateOne({ _id: req.params.id }, { $push: { replies: { _id: id, ip: req.body.ip, addedBy: currentUser?.userid, autor: currentUser ? null : req.body.autor, content: req.body.content, date: date } } })
        res.status(200).json({ date: date, id: id })

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: err })

    }

}

exports.deleteComment = (req, res) => {

    Topic.updateOne({ _id: req.params.id }, { $set: { replies: req.body.newreplies } })
        .then(result => {
            res.status(200).json({ result: 'done' })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.editTopicState = (req, res) => {

    Topic.updateOne({ _id: req.params.id }, { $set: { state: req.body.state } })
        .then(result => {
            res.status(200).json({ result: 'done' })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.pinUnpinTopic = (req, res) => {

    Topic.updateOne({ _id: req.params.id }, { $set: { pin: req.body.state } })
        .then(result => {
            res.status(200).json({ result: 'done' })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.deleteTopic = (req, res) => {
    Topic.deleteOne({ _id: req.params.id })
        .then(result => {
            res.status(200).json({ result: 'done' })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: err })
        })
}

exports.getnumberTopics = async (req, res) => {
    let topicCounts = { suggestions: null, questions: null }
    try {
        topicCounts.suggestions = await Topic.countDocuments({ type: 'suggestions' })
    } catch (error) {
        throw error;
    }
    try {

        topicCounts.questions = await Topic.countDocuments({ type: 'questions' })

    } catch (error) {
        throw error;

    }
    res.status(200).json({ result: topicCounts })
}

exports.deleteallTopics = (req, res) => {

    Topic.deleteMany()
        .then(result => {
            res.status(200).json({ result: 'deleted' })

        })
        .catch(err => {
            res.status(400).json({ err: err })
        })
}