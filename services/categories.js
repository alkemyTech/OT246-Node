const { Category } = require('../database/models')
const { ErrorObject } = require('../helpers/error')

exports.get = async () => {
  try {
    const result = await Category.findAll({
      attributes: ['name'],
    })
    return result
  } catch (err) {
    throw new ErrorObject(err.message, 500)
  }
}