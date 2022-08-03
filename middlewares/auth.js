const createHttpError = require('http-errors')
const { JsonWebTokenError } = require('jsonwebtoken')
const { findOneByEmail } = require('../services/users')
const { verifyToken } = require('./jwt')

const validateUser = (authHeader = '') => {
  const token = authHeader.split(' ')[1]
  const decoded = verifyToken(token)
  return findOneByEmail(decoded.email)
}

exports.isUserValid = async (req, res, next) => {
  const { headers: { authorization } } = req
  try {
    const userAuth = await validateUser(authorization)

    req.user = userAuth.dataValues
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
