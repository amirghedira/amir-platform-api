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
const { lookup } = require('geoip-lite');
const sendSlackFeedback = require('./middlewares/slackFeedback');
const { uploadSlackImages } = require('./middlewares/S3Upload');
const backup_database = require('./utils/backupDB');
const cron = require('node-cron');

// Enable CORS
app.use(cors());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.disable('etag');

mongosse.connect(process.env.MONGO_INFO, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(async (res) => {
        console.log('connected to database')
        cron.schedule('0 0 0 * * *', async () => {
            await backup_database()
        });
    })


app.use('*', (req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    const location = lookup(ip)
    logger('DEBUG', req.method, req.originalUrl, `request accepted from ${ip} from ${location?.country || 'NA'}, ${location?.city || 'NA'}`)
    return next()
})
app.use("*", (req, res, next) => {
    res.on('close', () => {
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
        const location = lookup(ip)
        logger('DEBUG', req.method, req.originalUrl, `response close for ${ip} from ${location?.country || 'NA'}, ${location?.city || 'NA'} with status ${res.statusCode}`)
        req.removeAllListeners()
    })
    return next()
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


app.post('/slack-feedback', async (req, res) => {

    const feedbackMessage =
        `
Title: ${req.body.fallback}
Link: ${req.body.title_link}
Content: ${req.body.text}
${req.body.image_url ? `
Image: ${req.body.image_url}
    `: ''}
    `
    sendSlackFeedback(feedbackMessage)
    res.status(200).json({ message: 'message sent to slack' })
})

app.post('/slack-upload', uploadSlackImages.array('images', 5), (req, res) => {
    const fileLinks = req.files.map(file => file.location)
    res.status(200).json({ fileLinks })
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
