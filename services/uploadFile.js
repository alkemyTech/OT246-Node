const { s3, createCommand } = require('./amazonS3')
const { ErrorObject } = require('../helpers/error')

const config = {
  bucketName: process.env.AWS_BUCKET_NAME,
  region: process.env.AWS_REGION,
}

exports.uploadFile = async (tempFile) => {
  const input = {
    Bucket: config.bucketName,
    Key: tempFile.name,
    Body: tempFile.data,
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
