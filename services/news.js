const { ForeignKeyConstraintError } = require('sequelize')
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

exports.updateNew = async (id, {
  name, content, image, categoryId,
}) => {
  try {
    const news = await this.getNewsById(id)

    news.setAttributes({
      name,
      content,
      image,
      categoryId,
    })

    await news.save()

    return news
  } catch (err) {
    if (err instanceof ForeignKeyConstraintError) {
      throw new ErrorObject(`Category with id ${categoryId} does not exist`, 400)
    }

    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}
