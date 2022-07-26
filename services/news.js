const { New } = require('../database/models')
const { ErrorObject } = require('../helpers/error')

exports.getNewsById = async (id) => {
  try {
    const newsById = await New.findByPk(id, {
      attributes: ['id', 'name', 'content', 'image'],
    })
    if (!newsById) {
      throw new ErrorObject(404, 'Not found')
    }
    return newsById
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}
