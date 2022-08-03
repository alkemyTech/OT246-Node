const createHttpError = require('http-errors')

const {
  getAllUsers,
  createUser,
  deleteUserBy,
  updateUser,
  loginUser,
  showUserData,
} = require('../services/users')

const { sendMailRegistration } = require('../services/sendMail')

const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')

module.exports = {
  get: catchAsync(async (req, res, next) => {
    try {
      const resp = await getAllUsers()

      return endpointResponse({
        res,
        code: 200,
        message: 'Users retrieved successfully',
        body: resp,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error getting users] - [users - GET]: ${err.message}`,
      )

      return next(httpError)
    }
  }),

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
      const responseBody = await createUser({
        firstName,
        lastName,
        email,
        password,
      })

      await sendMailRegistration({ email, name: firstName })
      endpointResponse({
        res,
        code: 201,
        message: 'Account registered successfully',
        body: responseBody,
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
    const { params: { id } } = req
    try {
      const resp = await deleteUserBy(id)
      return endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'User successfully deleted',
        body: resp,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error removing user] - [users/${id} - DELETE]: ${err.message}`,
      )
      return next(httpError)
    }
  }),

  put: catchAsync(async (req, res, next) => {
    const { body, params: { id } } = req
    try {
      const responseBody = await updateUser(id, body)

      return endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'User successfully updated',
        body: responseBody,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error updating user] - [users/${id} - PATCH]: ${err.message}`,
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
      const token = await loginUser({
        email,
        password,
      })
      endpointResponse({
        res,
        code: 200,
        message: 'Account login successfully',
        body: token,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error login account] - [auth/login - POST]: ${error.message}`,
      )

      next(httpError)
    }
  }),

  getData: (req, res) => {
    const { user } = req
    const responseBody = showUserData(user)

    return endpointResponse({
      res,
      code: 200,
      status: true,
      message: 'User retrieved successfully',
      body: responseBody,
    })
  },
}
