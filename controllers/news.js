const createHttpError = require('http-errors')
const {
  getNewsById,
  createNew,
  updateNew,
  deleteNewsById,
  getNewsPaginated,
} = require('../services/news')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')

module.exports = {
  getById: catchAsync(async (req, res, next) => {
    const { params: { id } } = req
    try {
      const responseBody = await getNewsById(id)

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
        `[Error retrieving news] - [news/${id} - GET]: ${err.message}`,
      )
      return next(httpError)
    }
  }),

  post: catchAsync(async (req, res, next) => {
    const { body } = req
    try {
      const responseBody = await createNew(body)

      return endpointResponse({
        res,
        code: 201,
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
    const { body, params: { id } } = req
    try {
      const responseBody = await updateNew(id, body)

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
        `[Error updating news] - [news/${id} - PUT]: ${err.message}`,
      )
      return next(httpError)
    }
  }),

  destroy: catchAsync(async (req, res, next) => {
    const { params: { id } } = req
    try {
      const responseBody = await deleteNewsById(id)

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
        `[Error deleting news] - [news/${id} - DELETE ]: ${err.message}`,
      )
      return next(httpError)
    }
  }),

  get: catchAsync(async (req, res, next) => {
    const { query: { page }, headers: { host }, protocol } = req
    const baseURL = `${protocol}://${host}`

    try {
      const responseBody = await getNewsPaginated(page, baseURL)

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
        `[Error retrieving news] - [news/?page=${page} - GET ]: ${err.message}`,
      )
      return next(httpError)
    }
  }),
}
