const createHttpError = require('http-errors')
const { setUserInRequest } = require('./setUserInRequest')

module.exports = {
  authUser: [
    setUserInRequest,
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
