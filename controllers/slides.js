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
    const { params: { id } } = req
    try {
      const responseBody = await getSlideById(id)

      endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'Slide retrieved successfully',
        body: responseBody,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error retrieving slide] - [slides/${id} - GET] - ${err.message}`,
      )
      next(httpError)
    }
  }),
  getAll: catchAsync(async (req, res, next) => {
    try {
      const responseBody = await getSlideAll()

      endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'Slides retrieved successfully',
        body: responseBody,
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
    const { body, params: { id } } = req
    try {
      const responseBody = await updateSlide(id, body)

      endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'Slide updated successfully',
        body: responseBody,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error updating slide] - [slides/${id} - PUT]: ${err.message}`,
      )
      next(httpError)
    }
  }),
  destroy: catchAsync(async (req, res, next) => {
    const { params: { id } } = req
    try {
      const responseBody = await deleteSlide(id)

      return endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'Slide successfully deleted',
        body: responseBody,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error deleting slide] - [slides/${id} - DELETE ] - ${err.message}`,
      )
      return next(httpError)
    }
  }),
  post: catchAsync(async (req, res, next) => {
    const { body } = req
    try {
      const responseBody = await createSlide(body)

      endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'Slide created successfully',
        body: responseBody,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error creating slide] - [slide - POST]: ${err.message}`,
      )
      next(httpError)
    }
  }),
}
