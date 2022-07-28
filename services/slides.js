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

exports.updateSlide = async (id, {
  imageUrl,
  text,
  order,
  organizationId,
}) => {
  try {
    const slide = await Slide.findByPk(id)
    if (!slide) {
      throw new ErrorObject('Slide not found', 404)
    }
    const updatedSlide = await slide.update({
      imageUrl,
      text,
      order,
      organizationId,
    })
    return updatedSlide
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}
