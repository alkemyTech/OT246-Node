const fs = require('fs')
const { uploadFileContents } = require('./amazonS3')
const { ErrorObject } = require('../helpers/error')

exports.uploadFile = async (tempFilePath) => {
  const content = fs.readFileSync(tempFilePath)
  try {
    return await uploadFileContents(tempFilePath, content)
  } catch (err) {
    throw new ErrorObject(err.message, 502)
  }
}
