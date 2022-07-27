const { Category } = require('../database/models')
const { ErrorObject } = require('../helpers/error')

exports.getCategories = async () => {
  try {
    const result = await Category.findAll({
      attributes: ['name'],
    })
    return result
  } catch (err) {
    throw new ErrorObject(err.message, 500)
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
