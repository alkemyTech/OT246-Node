const createHttpError = require('http-errors')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')
const { getComments } = require('../services/comments')

module.exports = {
  get: catchAsync(async (req, res, next) => {
    try {
      const responseBody = await getComments()

      return endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'Comments retrieved successfully',
        body: responseBody,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error retrieving comments] - [comments - GET]: ${err.message}`,
      )
      return next(httpError)
    }
  }),
}
