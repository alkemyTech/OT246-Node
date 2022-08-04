const { Buffer } = require('buffer')
const { s3, createCommand } = require('./amazonS3')
const { ErrorObject } = require('../helpers/error')

const config = {
  bucketName: process.env.AWS_BUCKET_NAME,
  region: process.env.AWS_REGION,
}

const uploadFileAws = async (tempFile) => {
  const input = {
    Bucket: config.bucketName,
    Key: tempFile.name,
    Body: tempFile.data,
    ContentType: 'image/jpeg',
    ACL: 'public-read',
  }
  try {
    const command = createCommand(input)
    const { ETag } = await s3.send(command)
    if (!ETag) {
      throw new ErrorObject('No file upload', 502)
    }
    return `https://${config.bucketName}.s3.${config.region}.amazonaws.com/${tempFile.name}`
  } catch (err) {
    throw new ErrorObject(err.message, 502)
  }
}

const decodeBase64 = (buffer64str) => Buffer.from(buffer64str, 'base64')

exports.uploadFile = async (dataFile, name) => {
  // 1. decode the file
  const dataFileDecoded = decodeBase64(dataFile)
  const nameFile = `${name}.jpg`
  // 2 . upload file content
  return uploadFileAws({ name: nameFile, data: dataFileDecoded })
}
