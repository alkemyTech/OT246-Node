const createHttpError = require('http-errors')
const { getSlideById, getSlideAll } = require('../services/slides')
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
        `[Error retrieving slide] - [slides - GET /slides ]: ${err.message}`,
      )

      next(httpError)
    }
  }),
}
