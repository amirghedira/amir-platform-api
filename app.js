const express = require('express');
const cors = require("cors");
const mongosse = require('mongoose');
const app = express();
const projectRoutes = require('./routes/project');
const userRoutes = require('./routes/user')
const topicRoutes = require('./routes/topic')
const bannedRoutes = require('./routes/banned')
const notificationRoutes = require('./routes/notification')
const webpush = require('web-push')
const bodyParser = require('body-parser')
const logger = require('./middlewares/logger.js');


app.use('*', (req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    const location = lookup(ip)
    logger('INFO', req.method, req.originalUrl, `request accepted from ${ip} from ${location?.country || 'NA'}, ${location?.city || 'NA'}`)
    return next()
})
app.use("*", (req, res, next) => {
    res.on('close', () => {
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
        const location = lookup(ip)
        logger('INFO', req.method, req.originalUrl, `response close for ${ip} from ${location?.country || 'NA'}, ${location?.city || 'NA'} with status ${res.statusCode}`)
        req.removeAllListeners()
    })
    next()
})

// Enable CORS
app.use(cors());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.disable('etag');


mongosse.connect(process.env.MONGO_INFO, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(res => {
        console.log('connected to database')
    })
const publicVadidKey = 'BMUYV7TShfXpU5edFVCfBEO0JwC-kCujoxV6q4pp3WHipuDPF2OE4bMd4LYYsNjKdn9GMtIlxW6vMQinu9qBkUg';
const privateKey = 'vw_UuoniFImREBrhv-eU3UewiDJg9vTfyAHnpPlVUWA'

webpush.setVapidDetails('mailto:test@gmail.com', publicVadidKey, privateKey)
app.post('/subscribe', (req, res) => {
    const subscription = req.body.subscription;
    res.status(201).json({ result: 'done' })
    const payload = JSON.stringify({ title: 'Amir Platform', content: req.body.content })
    webpush.sendNotification(subscription, payload)
        .catch(err => {
            console.log(err)
        })
})
app.use('/project', (projectRoutes))
app.use('/user', userRoutes)
app.use('/topic', topicRoutes)
app.use('/banned', bannedRoutes)
app.use('/notification', notificationRoutes)
app.get('/status', (req, res) => {
    res.status(200).json({ alive: true, status: 'ok' })
})

module.exports = app
