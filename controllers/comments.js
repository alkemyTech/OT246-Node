const createHttpError = require('http-errors')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')
const { createComment } = require('../services/comments')

module.exports = {
  post: catchAsync(async (req, res, next) => {
    const { user: { id: userId }, body } = req

    try {
      const responseBody = await createComment({ userId, ...body })

      endpointResponse({
        res,
        code: 201,
        message: 'Comment created sucessfully',
        body: responseBody,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error creating category] - [categories - POST]: ${err.message}`,
      )

      next(httpError)
    }
  }),
}
