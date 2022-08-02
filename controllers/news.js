const createHttpError = require('http-errors')
const {
  getNewsById,
  createNew,
  updateNew,
  deleteNewsById,
} = require('../services/news')
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
        message: 'News retrieved successfully',
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
    try {
      const responseBody = await createNew(req.body)

      return endpointResponse({
        res,
        code: 200,
        message: 'New created successfully',
        body: responseBody,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error creating new] - [news - POST]: ${err.message}`,
      )
      return next(httpError)
    }
  }),

  put: catchAsync(async (req, res, next) => {
    try {
      const responseBody = await updateNew(req.params.id, req.body)

      return endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'News updated successfully',
        body: responseBody,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error updating news] - [news - PUT /news/${req.params.id}]: ${err.message}`,
      )
      return next(httpError)
    }
  }),

  destroy: catchAsync(async (req, res, next) => {
    try {
      const responseBody = await deleteNewsById(req.params.id)

      return endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'News successfully deleted',
        body: responseBody,
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
