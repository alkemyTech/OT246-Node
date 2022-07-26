const createHttpError = require('http-errors')
const { createUser, deleteUserBy, findUserByAutentication } = require('../services/users')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')
const { verifyToken } = require('../middlewares/jwt')

module.exports = {
  register: catchAsync(async (req, res, next) => {
    const {
      body: {
        firstName,
        lastName,
        email,
        password,
      },
    } = req

    try {
      const newUser = await createUser({
        firstName,
        lastName,
        email,
        password,
      })

      endpointResponse({
        res,
        code: 201,
        message: 'Account registered successfully',
        body: newUser,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error registering account] - [auth/register - POST]: ${error.message}`,
      )

      next(httpError)
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

  getData: catchAsync(async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    const email = verifyToken(token)
    try {
      const myData = await findUserByAutentication(email)
      return endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'data get',
        body: myData,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error getting user data] - [users - GET DATA]: ${err.message}`,
      )
      return next(httpError)
    }
  }),

}
