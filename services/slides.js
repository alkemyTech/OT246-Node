const { ErrorObject } = require('../helpers/error')
const { Slide } = require('../database/models')
const { uploadFile } = require('./uploadFile')

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
      attributes: { exclude: ['text', 'organizationId', 'id'] },
    })

    return slide
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode)
  }
}
exports.updateSlide = async (id, {
  imageUrl, text, order, organizationId,
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
exports.deleteSlide = async (id) => {
  try {
    const slide = await Slide.findByPk(id)
    if (!slide) {
      throw new ErrorObject('Slide not found', 404)
    }
    await slide.destroy()
    return slide
  } catch (err) {
    throw new ErrorObject(err.message, 500)
  }
}
exports.createSlide = async (data) => {
  const { imageDataEncoded, text, organizationId } = data
  let order = null
  try {
    if (!data.order) {
      const slide = await Slide.findOne({
        order: [['order', 'DESC']],
      })
      order = slide.order + 1
    } else {
      order = data.order
    }
    const imageUrl = await uploadFile(imageDataEncoded, `slide${order}`)
    const slide = await Slide.create({
      imageUrl, text, order, organizationId,
    })
    return slide
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}
