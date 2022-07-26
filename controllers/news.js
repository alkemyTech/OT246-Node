const createHttpError = require('http-errors')
const { createNew } = require('../services/news')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')

module.exports = {
  post: catchAsync(async (req, res, next) => {
    const { body } = req
    try {
      const response = await createNew(body)
      return endpointResponse({
        res,
        code: 201,
        message: 'New created successfully',
        body: response,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error creating new] - [news - POST]: ${err.message}`,
      )
      return next(httpError)
    }
  }),
}
