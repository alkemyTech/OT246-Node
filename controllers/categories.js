const createHttpError = require('http-errors')
const {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../services/categories')
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

  post: catchAsync(async (req, res, next) => {
    const { body } = req
    try {
      const response = await createCategory(body)
      return endpointResponse({
        res,
        code: 201,
        message: 'Category created successfully',
        body: response,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error creating category] - [categories - POST]: ${err.message}`,
      )
      return next(httpError)
    }
  }),

  put: catchAsync(async (req, res, next) => {
    const { body, params: { id } } = req

    try {
      const response = await updateCategory(id, body)
      return endpointResponse({
        res,
        code: 200,
        message: 'Category updated successfully',
        body: response,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error updating category] - [categories/${id} - PUT]: ${err.message}`,
      )
      return next(httpError)
    }
  }),
  destroy: catchAsync(async (req, res, next) => {
    const { id } = req.params
    try {
      const resp = await deleteCategory(id)
      return endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'category successfully deleted',
        body: resp,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error removing category] - [categories - DELETE]: ${err.message}`,
      )
      return next(httpError)
    }
  }),
}
