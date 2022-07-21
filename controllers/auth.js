const { createHttpError } = require('http-errors')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')
const { createUser } = require('../services/users')

module.exports = {
  register: catchAsync(async (req, res, next) => {
    const {
      body: {
        fistName,
        lastName,
        email,
        password,
      },
    } = req

    try {
      const newUser = await createUser({
        fistName,
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
}
