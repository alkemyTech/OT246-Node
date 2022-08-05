const createHttpError = require('http-errors')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')
const { getComments, createComment, updateComment } = require('../services/comments')

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

  put: catchAsync(async (req, res, next) => {
    const { user: { id: userId }, body: { body }, params: { id } } = req
    try {
      const response = await updateComment(id, body, userId)

      return endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'Comment updated successfully',
        body: response,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error updating comment] - [comment/${id} - PUT]: ${err.message}`,
      )
      return next(httpError)
    }
  }),
}
