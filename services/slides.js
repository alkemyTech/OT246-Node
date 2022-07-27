const { ErrorObject } = require('../helpers/error')
const { Slide } = require('../database/models')

exports.getSlideById = async (id) => {
  try {
    const slide = await Slide.findByPk(id)
    if (!slide) {
      throw new ErrorObject(404, 'Slide not found')
    }
    return slide
  } catch (err) {
    throw new ErrorObject(err.message, 404)
  }
}

exports.getSlideAll = async () => {
  try {
    const slide = await Slide.findAll({
      attributes: { exclude: ['text', 'organizationId', 'id'] }
  })
    if (!slide) {
      throw new ErrorObject(404, 'Slide not found')
    }
    return slide
  } catch (err) {
    throw new ErrorObject(err.message, 404)
  }
}
