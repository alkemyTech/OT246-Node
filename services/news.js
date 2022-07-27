const { New } = require('../database/models')
const { ErrorObject } = require('../helpers/error')

exports.getNewsById = async (id) => {
  try {
    const newsById = await New.findByPk(id, {
      attributes: ['id', 'name', 'content', 'image', 'categoryId'],
    })
    if (!newsById) {
      throw new ErrorObject('Not found', 404)
    }
    return newsById
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode)
  }
}

exports.createNew = async (data) => {
  const {
    name,
    content,
    image,
    categoryId,
  } = data
  try {
    const result = await New.create({
      name,
      content,
      image,
      categoryId,
      type: 'news',
    })
    return result
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}
