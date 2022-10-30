const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')

const s3Config = {
    bucketName: process.env.S3_BUCKET_NAME,
    region: process.env.S3_REGION,
    accessKeyId: process.env.S3_IAM_USER_KEY,
    secretAccessKey: process.env.S3_IAM_USER_SECRET,
    s3BucketEndpoint: true,
    endpoint: process.env.S3_ENDPOINT

};

const s3 = new aws.S3(s3Config);

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
const s3delete = async (fileName) => {

    await s3.deleteObject({
        Bucket: process.env.BUCKET_NAME,
        Key: fileName
    }, function (err, data) {
        if (err) console.log(err, err.stack);
    })
}
module.exports = { upload, s3delete, s3 }