const createHttpError = require('http-errors')
const { isUserValid } = require('./auth')

module.exports = {
  authUser: [
    isUserValid,
    (req, res, next) => {
      if (req.user) {
        next()
      } else {
        const httpError = createHttpError(
          401,
          'Invalid login credentials',
        )
        next(httpError)
      }
    },
  ],
}
