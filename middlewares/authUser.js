const createHttpError = require('http-errors')
const { verifyToken } = require('./jwt')
const { endpointResponse } = require('../helpers/success')
const { catchAsync } = require('../helpers/catchAsync')

module.exports = {
  authUser: catchAsync(async (req, res, next) => {
    try {
      if (!req.headers.authorization) {
        endpointResponse({
          res,
          code: 403,
          status: false,
          message: 'You are not authorized to access this resource',
        })
      } else {
        const token = req.headers.authorization.split(' ')[1]
        verifyToken(token)
        next()
      }
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error authenticating user] - [authUser - middleware] - ${err.message}`,
      )
      next(httpError)
    }
  }),
}
