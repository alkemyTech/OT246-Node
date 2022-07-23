const createHttpError = require('http-errors')
const { createUser, deleteUserBy, updateUser } = require('../services/users')
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
        message: 'user successfully deleted',
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

  edit: catchAsync(async (req, res, next) => {
    const { id } = req.params
    const {
      body: {
        firstName,
        lastName,
        email,
        password,
        photo,
      },
    } = req
    try {
      const user = await updateUser(
        id,
        {
          firstName,
          lastName,
          email,
          password,
          photo,
        },
      )
      return endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'data successfully updated',
        body: user,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error updating user] - [users - PATCH]: ${err.message}`,
      )
      return next(httpError)
    }
  }),
}
