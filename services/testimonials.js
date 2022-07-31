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
