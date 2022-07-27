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

exports.deleteNewsById = async (id) => {
  try {
    const newsById = await New.findByPk(id)
    if (!newsById) {
      throw new ErrorObject('Not found', 404)
    }
    await newsById.destroy()
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}
