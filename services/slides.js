const { ErrorObject } = require('../helpers/error')
const { Slide } = require('../database/models')

exports.getById = async (id) => {
  try {
    const getSlide = await Slide.findByPk(id)
    if (!getSlide) {
      throw new ErrorObject(404, 'Slide not found')
    }
    return getSlide
  } catch (err) {
    throw new ErrorObject(err.message, 404)
  }
}
