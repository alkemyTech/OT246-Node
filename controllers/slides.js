const createHttpError = require('http-errors')
const {
  getSlideById,
  getSlideAll,
  updateSlide,
  deleteSlide,
  createSlide,
} = require('../services/slides')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')

module.exports = {
  getById: catchAsync(async (req, res, next) => {
    try {
      const slide = await getSlideById(req.params.id)
      endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'Slide',
        body: slide,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error retrieving slide] - [slides - GET /slides/${req.params.id}] - ${err.message}`,
      )
      next(httpError)
    }
  }),
  getAll: catchAsync(async (req, res, next) => {
    try {
      const slide = await getSlideAll()
      endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'Slides retrieved successfully',
        body: slide,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error retrieving slide] - [slides - GET]: ${err.message}`,
      )

      next(httpError)
    }
  }),
  put: catchAsync(async (req, res, next) => {
    try {
      const slide = await updateSlide(req.params.id, req.body)
      endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'Slide updated successfully',
        body: slide,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error updating slide] - [slides - PUT]: ${err.message}`,
      )
      next(httpError)
    }
  }),
  destroy: catchAsync(async (req, res, next) => {
    try {
      await deleteSlide(req.params.id)
      return endpointResponse({
        res,
        code: 200,
        status: true,
        message: `Slide ${req.params.id} was deleted`,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error deleting slide] - [slides - DELETE /slides/${req.params.id}] - ${err.message}`,
      )
      return next(httpError)
    }
  }),
  post: catchAsync(async (req, res, next) => {
    try {
      const slide = await createSlide(req.body)
      endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'Slide created successfully',
        body: slide,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error creating slide] - [slides - POST]: ${err.message}`,
      )
      next(httpError)
    }
  }),
}
