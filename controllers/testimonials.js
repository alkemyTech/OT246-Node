const createHttpError = require('http-errors')
const { createTestimonial } = require('../services/testimonials')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')

module.exports = {
  post: catchAsync(async (req, res, next) => {
    const { body } = req
    try {
      const response = await createTestimonial(body)
      return endpointResponse({
        res,
        code: 201,
        message: 'Testimonial created successfully',
        body: response,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error creating testimonial] - [testimonials - POST]: ${err.message}`,
      )
      return next(httpError)
    }
  }),
}
