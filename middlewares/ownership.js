const createHttpError = require('http-errors')
const { authUser } = require('./authUser')

module.exports = {
  ownership: [
    authUser,
    (req, res, next) => {
      const userId = Number(req.params.id)
      const { user } = req
      if (userId === user.id || user.roleId === 1) {
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
