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

  /**
   * @swagger
   * components:
   *   responses:
   *     UserRegistered:
   *       description: The account was registered successfully
   *       content:
   *         application/json:
   *           schema:
   *             allOf:
   *               - $ref: '#/components/schemas/SuccessResponse'
   *               - type: object
   *                 properties:
   *                   code:
   *                     example: 201
   *                   message:
   *                     example: Account registered successfully
   *                   body:
   *                     type: object
   *                     properties:
   *                       user:
   *                         $ref: '#/components/schemas/User'
   *                       token:
   *                         type: string
   *                         description: User's login token
   *                         example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.\
   *                           eyJlbWFpbCI6Imp1YW4ucGVyZXpAY29tcGFueS5jb20iLCJpYXQiOjE2NTk5Nzg1MDgs\
   *                           ImV4cCI6MTY1OTk4MjEwOH0.\
   *                           0vApbsxQ6vqbumair2kFs58JuMX470XPrQ6nDd7BwO4"
   *     RegisterBadRequest:
   *       allOf:
   *         - $ref: '#/components/responses/LoginValidationError'
   *         - description: >-
   *             The request body validation failed or the provided email is already in use
   *           content:
   *             text/html:
   *               schema:
   *                 type: string
   *                 example: >-
   *                   BadRequestError:
   *                   [Error registering account] - [auth/register - POST]: Email is already in use
   */

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

  /**
   * @swagger
   * components:
   *   responses:
   *     UserLoggedIn:
   *       description: Login was successful
   *       content:
   *         application/json:
   *           schema:
   *             allOf:
   *               - $ref: '#/components/schemas/SuccessResponse'
   *               - type: object
   *                 properties:
   *                   message:
   *                     example: Account login successfully
   *                   body:
   *                     type: object
   *                     properties:
   *                       token:
   *                         type: string
   *                         description: User's login token
   *                         example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.\
   *                           eyJlbWFpbCI6Imp1YW4ucGVyZXpAY29tcGFueS5jb20iLCJpYXQiOjE2NTk5Nzg1MDgs\
   *                           ImV4cCI6MTY1OTk4MjEwOH0.\
   *                           0vApbsxQ6vqbumair2kFs58JuMX470XPrQ6nDd7BwO4"
   *     LoginInvalidCredentials:
   *       description: Email or password are incorrect
   *       content:
   *         text/html:
   *           schema:
   *             type: string
   *             example: >-
   *               UnauthorizedError:
   *               [Error login account] - [auth/login - POST]: Invalid Credentials
   *     LoginValidationError:
   *       description: The request body validation failed
   *       content:
   *         application/json:
   *           schema:
   *             allOf:
   *             - $ref: '#/components/schemas/ValidationError'
   *             - type: object
   *               properties:
   *                 errors:
   *                   example:
   *                     - value: notAnEmail
   *                       msg: Must be an email
   *                       param: email
   *                       location: body
   */

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

  /**
   * @swagger
   * components:
   *   responses:
   *     UserDataRetrieved:
   *       description: The user data was retrieved successfully
   *       content:
   *         application/json:
   *           schema:
   *             allOf:
   *               - $ref: '#/components/schemas/SuccessResponse'
   *               - type: object
   *                 properties:
   *                   message:
   *                     example: User retrieved successfully
   *                   body:
   *                     $ref: '#/components/schemas/User'
   *     InvalidToken:
   *       description: The authorization token is invalid or nonexistent
   *       content:
   *         text/html:
   *           schema:
   *             type: string
   *             example: 'UnauthorizedError: Invalid login credentials'
   */

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
