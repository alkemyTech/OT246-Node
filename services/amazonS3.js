const { S3Client, AbortMultipartUploadCommand } = require('@aws-sdk/client-s3')

exports.s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_PUBLIC_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
  region: process.env.AWS_REGION,
  signatureVersion: 'v4',
})

exports.createCommand = (params) => new AbortMultipartUploadCommand(params)
