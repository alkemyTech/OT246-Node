const { ForeignKeyConstraintError } = require('sequelize')
const Paginator = require('../helpers/paginator')
const { New, Category } = require('../database/models')
const { ErrorObject } = require('../helpers/error')

exports.getNewsById = async (id) => {
  try {
    const newsById = await New.findByPk(id, {
      attributes: ['id', 'name', 'content', 'image', 'categoryId'],
    })
    if (!newsById) {
      throw new ErrorObject('Not found News', 404)
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
    const category = await Category.findByPk(categoryId)
    if (!category) {
      throw new ErrorObject('Category not found', 404)
    }
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
      throw new ErrorObject('Category not found', 404)
    }

    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}

exports.deleteNewsById = async (id) => {
  try {
    const newsById = await this.getNewsById(id)

    await newsById.destroy()
    return newsById
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}

exports.getNewsPaginated = async (page) => {
  try {
    const cantNews = await New.count()
    const pager = new Paginator(page, 'news', cantNews)
    const { offset, limit } = pager.getRecordRange()

    const news = await New.findAll({
      attributes: { exclude: ['deletedAt'] },
      offset,
      limit,
    })

    return { urls: pager.getAttachedUrl(), news }
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}
