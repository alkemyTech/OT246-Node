const aws = require('aws-sdk')
const fs = require('fs')
const path = require('path')

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_PUBLIC_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
})

export function uploadFileContents(fileName, fileContents) {
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

export function uploadFilePath(filePath) {
  const fileContent = fs.readFileSync(filePath)
  const fileName = path.parse(filePath).base
  return uploadFileContents(fileName, fileContent)
}

export function deleteFile(key) {
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
