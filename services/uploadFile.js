const fs = require('fs')
const { s3, createCommand } = require('./amazonS3')
const { ErrorObject } = require('../helpers/error')

const config = {
  bucketName: process.env.AWS_BUCKET_NAME,
  region: process.env.AWS_REGION,
}

exports.uploadFile = async (tempFilePath) => {
  const content = fs.readFileSync(tempFilePath)
  const command = createCommand({
    Bucket: config.bucketName,
    Key: tempFilePath,
    Body: content,
  })
  try {
    const { ETag } = await s3.send(command)
    if (!ETag) {
      throw new ErrorObject('No file upload', 502)
    }
    return `https://${config.bucketName}.s3.${config.region}.amazonaws.com/${tempFilePath}`
  } catch (err) {
    throw new ErrorObject(err.message, 502)
  }
}
