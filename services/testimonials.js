const { Testimonial } = require('../database/models')
const { ErrorObject } = require('../helpers/error')

exports.createTestimonial = async ({ name, content }) => {
  try {
    const newTestimonial = await Testimonial.create({
      name,
      content,
    })
    return newTestimonial
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}
