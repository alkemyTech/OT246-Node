const createHttpError = require('http-errors')
const { getAllUsers, deleteUserBy } = require('../services/users')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')

module.exports = {
  get: catchAsync(async (req, res, next) => {
    try {
      const resp = await getAllUsers()

      return endpointResponse({
        res,
        code: 200,
        message: 'Users retrieved successfully',
        body: resp,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error getting users] - [users - GET]: ${err.message}`,
      )

      return next(httpError)
    }
  }),

  destroy: catchAsync(async (req, res, next) => {
    const { id } = req.params
    try {
      const resp = await deleteUserBy(id)
      return endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'user successfuly deleted',
        body: resp,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error removing user] - [users - DELETE]: ${err.message}`,
      )
      return next(httpError)
    }
  }),
}
