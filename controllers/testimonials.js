const createHttpError = require('http-errors')
const { updateTestimonial } = require('../services/testimonials')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')

module.exports = {
  put: catchAsync(async (req, res, next) => {
    try {
      const testimonial = await updateTestimonial(req.params.id, req.body)
      endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'Testimonial updated successfully',
        body: testimonial,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error updating testimonial] - [testimonials - PUT]: ${err.message}`,
      )
      next(httpError)
    }
  }),
}
