const createHttpError = require('http-errors')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')
<<<<<<< HEAD
const { getComments, deleteComments } = require('../services/comments')
=======
const { getComments } = require('../services/comments')
>>>>>>> 3827d0c7cb8e48a16c2dfebfa8b9c4e1efac949e

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

  destroy: catchAsync(async (req, res, next) => {
    const { params: { id } } = req
    try {
      const responseBody = await deleteComments(id)

      return endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'Comments successfully deleted',
        body: responseBody,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error deleting comments] - [comments/${id} - DELETE]: ${err.message}`,
      )
      return next(httpError)
    }
  }),

}
