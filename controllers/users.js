const createHttpError = require('http-errors')
const { createUser, deleteUserBy, loginUser } = require('../services/users')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')

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
        `[Error registering account] - [auth/register- POST]: ${error.message}`,
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
  login: catchAsync(async (req, res, next) => {
    const {
      body: {
        email,
        password,
      },
    } = req

    try {
      const user = await loginUser({
        email,
        password,
      })

      endpointResponse({
        res,
        code: 201,
        message: 'Account login successfully',
        body: user,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error login account] - [auth/login- POST]: ${error.message}`,
      )

      next(httpError)
    }
  }),
}
