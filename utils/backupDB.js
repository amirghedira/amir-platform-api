const User = require('../models/User')
const Project = require('../models/Project')
const Notification = require('../models/Notification')
const Topic = require('../models/Topic')
const Banned = require('../models/Banned')
const fs = require('fs')
const moment = require('moment')
const logger = require('./logger.js')
const aws = require('aws-sdk')
const AdmZip = require("adm-zip");

aws.config.update({
    accessKeyId: process.env.S3_BACKUP_IAM_USER_KEY,
    secretAccessKey: process.env.S3_BACKUP_IAM_USER_SECRET,
    Bucket: process.env.S3_BACKUP_BUCKET_NAME,
    region: process.env.S3_BACKUP_REGION,

});

const s3 = new aws.S3();
const backup_database = async () => {


    const backup_date = moment(new Date()).format("YYYY-MM-DD")

    logger("INFO", "", "", `Initiating database backup ${backup_date} into S3`)
    const users = await User.find()
    const projects = await Project.find()
    const topics = await Topic.find()
    const notifications = await Notification.find()
    const banned = await Banned.find()

    fs.mkdirSync(backup_date);
    fs.writeFileSync(`${backup_date}/users.json`, `${JSON.stringify(users)}\n`, () => { })
    fs.writeFileSync(`${backup_date}/projects.json`, `${JSON.stringify(projects)}\n`, () => { })
    fs.writeFileSync(`${backup_date}/topics.json`, `${JSON.stringify(topics)}\n`, () => { })
    fs.writeFileSync(`${backup_date}/notifications.json`, `${JSON.stringify(notifications)}\n`, () => { })
    fs.writeFileSync(`${backup_date}/banned.json`, `${JSON.stringify(banned)}\n`, () => { })
    const zip = new AdmZip();
    const zipBackupFile = `${backup_date}.zip`
    zip.addLocalFolder(backup_date);
    zip.writeZip(zipBackupFile);
    const blob = fs.readFileSync(zipBackupFile)
    s3.upload({
        Bucket: process.env.S3_BACKUP_BUCKET_NAME,
        Key: `backups/${zipBackupFile}`,
        Body: blob,

    }).promise()
        .then(res => {
            console.log(res)
            fs.rm(backup_date, { recursive: true }, (err) => { })
            fs.unlinkSync(zipBackupFile)
            cleanup_old_backups()
        })
        .catch(err => {
            console.log(err)
        })
}



const cleanup_old_backups = () => {
    s3.listObjects({
        Bucket: process.env.S3_BACKUP_BUCKET_NAME,
        Prefix: 'backups/',

    }, (err, data) => {
        const availableBackups = data.Contents.map(o => o.Key.split("/")[1])
        availableBackups.sort(function (a, b) {
            return (moment(new Date(b.split('.zip')[0])) - moment(new Date(a.split('zip')[0])))
        });
        availableBackups.slice(2).forEach(async (backup, index) => {
            logger("INFO", "", "", `Cleaning database backup ${backup} from S3`)
            s3.deleteObject({
                Bucket: process.env.S3_BACKUP_BUCKET_NAME,
                Key: `backups/${backup}`
            }).promise()
        })
    });
}
module.exports = backup_database