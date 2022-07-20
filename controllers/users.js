const createHttpError = require('http-errors')
const { deleteUserById } = require('../services/users')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')

module.exports = {
  delete: catchAsync(async (_req, res, next) => {
    const { id } = _req.params
    try {
      return endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'OK',
        body: await deleteUserById(id),
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error retrieving users] - [users - DELETE]: ${err.message}`,
      )
      return next(httpError)
    }
  }),
}
