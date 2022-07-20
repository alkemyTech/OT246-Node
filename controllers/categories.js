const createHttpError = require('http-errors')
const { get } = require('../services/categories')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')

module.exports = {
  get: catchAsync(async (_req, res, next) => {
    try {
      const getCategories = await get()
      return endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'OK',
        body: getCategories,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error retrieving categories] - [categories - GET]: ${err.message}`,
      )
      return next(httpError)
    }
  }),
}
