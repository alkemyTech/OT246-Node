const aws = require('aws-sdk')
const fs = require('fs')
const path = require('path')

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_PUBLIC_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
})

exports.uploadFileContents = (fileName, fileContents) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: fileName,
    Body: fileContents,
  }

  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err) reject(err)
      else resolve(data.Location)
    })
  })
}

exports.uploadFilePath = (filePath) => {
  const fileContent = fs.readFileSync(filePath)
  const fileName = path.parse(filePath).base
  return exports.uploadFileContents(fileName, fileContent)
}

exports.deleteFile = (key) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: key,
  }

  return new Promise((resolve, reject) => {
    s3.deleteObject(params, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}
