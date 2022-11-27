const moment = require('moment')
const fs = require('fs')
const sendSlackMessage = require('./slackNotification')
const logger = (logLevel, method, path, message) => {
    const nowDate = moment(new Date()).format("DD-MMM-yyyy:HH:mm:ss")
    const fileName = moment(new Date()).format("DD-MM-yyyy")
    console.log(fileName)
    const logMsg = `${nowDate} [${logLevel}] ${method} ${path} : ${message}`
    console.log(logMsg)
    if (logLevel == 'ERROR' || logLevel == "INFO") {
        sendSlackMessage(logMsg)
    }
    if (process.env.ENV == 'production')
        fs.appendFile(`logs/log-${fileName}.log`, `${logMsg}\n`, function (err) {
            if (err) {
                if (!fs.existsSync('logs')) {
                    fs.mkdirSync('logs');
                }
            } else {
                // done
            }
        })
}


module.exports = logger