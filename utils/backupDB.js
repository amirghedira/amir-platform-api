const { s3 } = require('../middlewares/S3Upload.js')
const User = require('../models/User')
const Project = require('../models/Project')
const Notification = require('../models/Notification')
const Topic = require('../models/Topic')
const Banned = require('../models/Banned')
const fs = require('fs')
const moment = require('moment')
const backupFiles = ['users.json', 'projects.json', 'topics.json', 'notifications.json', 'banned.json']
const logger = require('../middlewares/logger')
const backup_database = async () => {


    const backup_date = moment(new Date()).format("YYYY-MM-DD")
    logger("INFO", "", "", `Initiating database backup ${backup_date} into S3`)
    const users = await User.find()
    const projects = await Project.find()
    const topics = await Topic.find()
    const notifications = await Notification.find()
    const banned = await Banned.find()

    fs.writeFileSync('users.json', `${JSON.stringify(users)}\n`, () => { })
    fs.writeFileSync('projects.json', `${JSON.stringify(projects)}\n`, () => { })
    fs.writeFileSync('topics.json', `${JSON.stringify(topics)}\n`, () => { })
    fs.writeFileSync('notifications.json', `${JSON.stringify(notifications)}\n`, () => { })
    fs.writeFileSync('banned.json', `${JSON.stringify(banned)}\n`, () => { })
    backupFiles.forEach((backupFile, index) => {
        setTimeout(() => {
            const blob = fs.readFileSync(backupFile)
            s3.upload({
                Bucket: process.env.S3_BUCKET_NAME,
                Key: `backups/backup-${backup_date}/${backupFile}`,
                ACL: 'public-read',
                Body: blob,

            }).promise()
            if (index == backupFiles.length - 1) {
                cleanup_old_backups()
            }
        }, 4000 * index)
    })
}



const cleanup_old_backups = () => {
    s3.listObjects({
        Bucket: process.env.S3_BUCKET_NAME,
        Prefix: 'backups/',

    }, (err, data) => {
        const availableBackups = []
        data.Contents.forEach(b => {
            const backupName = b.Key.split("/")[1]
            if (backupName.includes('backup') && !availableBackups.includes(backupName)) {
                availableBackups.push(backupName)
            }
        })
        availableBackups.sort(function (a, b) {
            return (moment(new Date(b.split('backup')[1])) - moment(new Date(a.split('backup')[1])))
        });
        availableBackups.forEach(async (backup, index) => {
            if (index > 1) {
                setTimeout(() => {
                    logger("INFO", "", "", `Cleaning database backup ${backup} from S3`)
                    backupFiles.forEach(file => {
                        s3.deleteObject({
                            Bucket: process.env.S3_BUCKET_NAME,
                            Key: `backups/${backup}/${file}`

                        }).promise()
                    })
                }, 4000 * index)
            }
        })
    });
}
module.exports = backup_database