const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')

aws.config.update({
    accessKeyId: process.env.S3_IAM_USER_KEY,
    secretAccessKey: process.env.S3_IAM_USER_SECRET,
    Bucket: process.env.S3_BUCKET_NAME,
    region: process.env.S3_REGION,
    s3BucketEndpoint: true,
    endpoint: process.env.S3_ENDPOINT

});

const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.S3_BUCKET_NAME,
        acl: 'public-read',
        metadata: (req, file, cb) => {
            cb(null, { fieldName: file.fieldname })
        },
        key: (req, file, cb) => {
            cb(null, Date.now().toString() + '-' + file.originalname)
        }
    })
})
const s3delete = async (fileLink) => {
    const fileName = fileLink.split('/')[3]
    await s3.deleteObject({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: fileName
    }, function (err, data) {
        if (err) console.log(err, err.stack);
    })
}
module.exports = { upload, s3delete, s3 }