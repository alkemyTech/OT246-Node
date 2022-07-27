const createHttpError = require('http-errors')
const { getNewsById, createNew, deleteNewsById } = require('../services/news')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')

module.exports = {
  getById: catchAsync(async (req, res, next) => {
    try {
      const responseBody = await getNewsById(req.params.id)
      return endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'OK',
        body: responseBody,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error retrieving news] - [news - GET /news/${req.params.id}]: ${err.message}`,
      )
      return next(httpError)
    }
  }),
  post: catchAsync(async (req, res, next) => {
    const { body } = req
    try {
      const response = await createNew(body)
      return endpointResponse({
        res,
        code: 201,
        message: 'New created successfully',
        body: response,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error creating new] - [news - POST]: ${err.message}`,
      )
      return next(httpError)
    }
  }),
  destroy: catchAsync(async (req, res, next) => {
    try {
      await deleteNewsById(req.params.id)
      return endpointResponse({
        res,
        code: 200,
        status: true,
        message: `The news with ID ${req.params.id} has been deleted`,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error deleting news] - [news - DELETE /news/${req.params.id}]: ${err.message}`,
      )
      return next(httpError)
    }
  }),
}
