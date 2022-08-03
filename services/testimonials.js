const { ErrorObject } = require('../helpers/error')
const { Testimonial } = require('../database/models')

exports.updateTestimonial = async (id, {
  name, image, content,
}) => {
  try {
    const testimonial = await Testimonial.findByPk(id)
    if (!testimonial) {
      throw new ErrorObject('Testimonial not found', 404)
    }
    return await testimonial.update({
      name,
      image,
      content,
    })
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}
exports.createTestimonial = async ({ name, content, image }) => {
  try {
    const newTestimonial = await Testimonial.create({
      name,
      content,
      image,
    })
    return newTestimonial
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}
exports.deleteTestimonial = async (id) => {
  try {
    const testimonial = await Testimonial.findByPk(id)
    if (!testimonial) {
      throw new ErrorObject('Testimonial not found', 404)
    }
    await testimonial.destroy()
    return testimonial
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}
