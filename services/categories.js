const { Category } = require('../database/models')
const { ErrorObject } = require('../helpers/error')
const Paginator = require('../helpers/paginator')

exports.getCategories = async (page, baseURL) => {
  try {
    const cantCategories = await Category.count()
    const pager = new Paginator(Number(page), 'categories', cantCategories)
    const { offset, limit } = pager.getRecordRange()

    const categories = await Category.findAll({
      attributes: { exclude: ['deletedAt'] },
      offset,
      limit,
    })

    return { urls: pager.getAttachedUrl(baseURL), categories }
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}

exports.getCategoryById = async (id) => {
  try {
    const result = await Category.findByPk(
      id,
      { attributes: { exclude: ['deletedAt'] } },
    )

    if (!result) {
      throw new ErrorObject('Category not found', 404)
    }

    return result
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}

exports.createCategory = async (name) => {
  try {
    const result = await Category.create(name)
    return result
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}

exports.updateCategory = async (id, { name, description, image }) => {
  try {
    const category = await this.getCategoryById(id)

    category.setAttributes({ name, description, image })

    await category.save()

    return category
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}

exports.deleteCategory = async (id) => {
  try {
    const category = await Category.findByPk(id)
    if (!category) {
      throw new ErrorObject('Category not found', 404)
    }
    await category.destroy()
    return category
  } catch (err) {
    throw new ErrorObject(err.message, 404)
  }
}
