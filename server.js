require('dotenv').config()
const app = require('./app');
const sendSlackMessage = require('./middlewares/slackNotification');
const http = require('http').createServer(app);
const io = require('socket.io')(http)
http.listen(process.env.PORT || 5000, () => {
    if (process.env.ENV == "production")
        sendSlackMessage(`New Deployment of amir-platform api Version: ${process.env.VERSION}`)
    io.on('connection', (socket) => {
        socket.on('sendnotification', (notification) => {
            socket.broadcast.emit('sendnotification', notification)
        })
        socket.on('sendprojects', (projects) => {
            socket.broadcast.emit('sendprojects', projects)
        })
        socket.on('sendtopic', (topic) => {
            socket.broadcast.emit('sendtopic', topic)
        })

        socket.on('sendtopics', topics => {
            socket.broadcast.emit('sendtopics', topics)
        })
        socket.on('sendbannedmembers', newbannedusers => {
            socket.broadcast.emit('sendbannedmembers', newbannedusers)
        })


    })

})


