const moment = require('moment')
const fs = require('fs')
const sendSlackMessage = require('./slackNotification')

const logger = (logLevel, method, path, message) => {
    const nowDate = moment(new Date()).format("DD-MMM-yyyy:hh:mm:ss")
    const logMsg = `${nowDate} [${logLevel}] ${method} ${path} : ${message}`
    console.log(logMsg)
    if (logLevel === 'ERROR') {
        sendSlackMessage(logMsg)
    }
    fs.appendFile('api.log', `${logMsg}\n`, function (err) {
        if (err) {
            // append failed
        } else {
            // done
        }
    })
}


module.exports = logger