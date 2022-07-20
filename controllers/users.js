const createHttpError = require('http-errors')
const { deleteUserBy } = require('../services/users')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')

module.exports = {
<<<<<<< HEAD
  deleteUser: catchAsync(async (req, res, next) => {
=======
  deleteById: catchAsync(async (req, res, next) => {
>>>>>>> 1af5d6bf14efe199fb4159f8405601e3eb08036f
    const { id } = req.params
    try {
      const resp = await deleteUserBy(id)
      return endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'OK',
        body: resp,
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
