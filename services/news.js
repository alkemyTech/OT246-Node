const { New } = require('../database/models')
const { ErrorObject } = require('../helpers/error')

exports.createNew = async (data) => {
  const { name, content, image } = data
  try {
    const result = await New.create({
      name,
      content,
      image,
      categoryId: 1,
    })
    return result
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}
