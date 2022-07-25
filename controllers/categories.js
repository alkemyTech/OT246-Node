const createHttpError = require('http-errors')
const { getCategories, getCategoryById } = require('../services/categories')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')

module.exports = {
  get: catchAsync(async (req, res, next) => {
    try {
      const response = await getCategories()
      return endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'OK',
        body: response,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error retrieving categories] - [categories - GET]: ${err.message}`,
      )
      return next(httpError)
    }
  }),

  getById: catchAsync(async (req, res, next) => {
    const { params: { id } } = req

    try {
      const response = await getCategoryById(id)
      return endpointResponse({
        res,
        code: 200,
        message: 'Category retrieved successfully',
        body: response,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error retrieving category] - [categories/${id} - GET]: ${err.message}`,
      )
      return next(httpError)
    }
  }),
}
