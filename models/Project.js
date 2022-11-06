const mongoose = require('mongoose');
const ProjectSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: { type: String, required: true },
    date: { type: Date, required: true },
    started: { type: String, required: true },
    technologie: { type: String, required: true },
    commentsCount: { type: Number, required: true },
    gitViewers: { type: Number, required: true },
    downloadcount: { type: Number, required: true },
    visibility: { type: Boolean, default: true },
    documentation: { type: String, required: true },
    status: { type: String, required: true },
    overview: { type: String },
    summary: { type: String, },
    platform: { type: String, },
    features: { type: String, },
    addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    whatlearned: { type: String },
    github: { type: String },
    filelink: { type: String },
    imagesurl: [],
    Comments: [{
        _id: mongoose.Types.ObjectId,
        ip: String,
        autor: String,
        date: Date,
        content: String
    }]

})

module.exports = mongoose.model('Project', ProjectSchema)