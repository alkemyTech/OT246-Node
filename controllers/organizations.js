const createHttpError = require('http-errors')
const { get } = require('../services/organizations')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')

module.exports = {
  get: catchAsync(async (_req, res, next) => {
    try {
      return endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'OK',
        body: await get(),
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error retrieving organizations] - [organizations - GET]: ${err.message}`,
      )
      return next(httpError)
    }
  }),
}
