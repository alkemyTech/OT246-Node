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
