const createHttpError = require('http-errors')

const {
  getAllUsers,
  createUser,
  deleteUserBy,
  updateUser,
  loginUser,
  findDataByAutentication,
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
      const newUser = await createUser({
        firstName,
        lastName,
        email,
        password,
      })
      // { 0: registerTemplate }
      await sendMailRegistration(newUser.user.email, { name: newUser.user.firstName })
      endpointResponse({
        res,
        code: 201,
        message: 'Account registered successfully',
        body: { user: newUser.user, token: newUser.token },
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

  put: catchAsync(async (req, res, next) => {
    const { id } = req.params
    const data = req.body
    try {
      const toUpdate = await updateUser(id, data)
      return endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'data successfully updated',
        body: toUpdate,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error updating user] - [users - PATCH]: ${err.message}`,
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
        `[Error login account] - [auth/login- POST]: ${error.message}`,
      )

      next(httpError)
    }
  }),

  getData: catchAsync(async (req, res, next) => {
    try {
      const myData = await findDataByAutentication(req.headers.authorization)
      myData.password = 'password'
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
