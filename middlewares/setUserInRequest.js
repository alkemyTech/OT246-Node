const createHttpError = require('http-errors')
const { JsonWebTokenError } = require('jsonwebtoken')
const { findOneByEmail } = require('../services/users')
const { verifyToken } = require('./jwt')

exports.setUserInRequest = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1]
      const decoded = verifyToken(token)
      const user = await findOneByEmail(decoded.email)

      req.user = user
    } else {
      req.user = null
    }

    next()
  } catch (err) {
    if (err instanceof JsonWebTokenError || err.statusCode === 404) {
      req.user = null
      next()
    } else {
      const httpError = createHttpError(
        err.statusCode,
        err.message,
      )

      next(httpError)
    }
  }
}
