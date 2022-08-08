const createHttpError = require('http-errors')
const {
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
  getTestimonialsPaginated,
} = require('../services/testimonials')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')

module.exports = {
  put: catchAsync(async (req, res, next) => {
    const { body, params: { id } } = req
    try {
      const responseBody = await updateTestimonial(id, body)
      return endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'Testimonial updated successfully',
        body: responseBody,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error updating testimonial] - [testimonials/${id} - PUT]: ${err.message}`,
      )
      return next(httpError)
    }
  }),
  post: catchAsync(async (req, res, next) => {
    const { body } = req
    try {
      const responseBody = await createTestimonial(body)
      return endpointResponse({
        res,
        code: 201,
        message: 'Testimonial created successfully',
        body: responseBody,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error creating testimonial] - [testimonials - POST]: ${err.message}`,
      )
      return next(httpError)
    }
  }),
  destroy: catchAsync(async (req, res, next) => {
    try {
      await deleteTestimonial(req.params.id)
      return endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'Testimonial successfully deleted',
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error deleting testimonial] - [testimonials/${req.params.id} - DELETE ]: ${err.message}`,
      )
      return next(httpError)
    }
  }),

  get: catchAsync(async (req, res, next) => {
    const { query: { page } } = req
    try {
      const responseBody = await getTestimonialsPaginated(page)

      return endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'Testimonials retrieved successfully',
        body: responseBody,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error retrieving testimonials] - [testimonials - GET]: ${err.message}`,
      )
      return next(httpError)
    }
  }),
}
