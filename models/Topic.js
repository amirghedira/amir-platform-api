const mongoose = require('mongoose');
const TopicSchema = mongoose.Schema({

    ip: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    autor: { type: String },
    addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date: { type: Date, required: true },
    state: { type: Boolean, required: true },
    pin: { type: Boolean, required: true },
    type: { type: String, required: true },
    replies: [{
        _id: mongoose.Schema.Types.ObjectId,
        autor: String,
        addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        ip: String,
        content: String,
        date: Date
    }]


})

module.exports = mongoose.model('Topic', TopicSchema)