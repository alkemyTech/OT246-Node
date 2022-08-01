const createHttpError = require('http-errors')
const { createTestimonial, updateTestimonial } = require('../services/testimonials')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')

module.exports = {
  put: catchAsync(async (req, res, next) => {
    try {
      const testimonial = await updateTestimonial(req.params.id, req.body)
      return endpointResponse({
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
      return next(httpError)
    }
  }),
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
