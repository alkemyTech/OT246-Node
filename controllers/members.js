const createHttpError = require('http-errors')
const { createMember, updateMember } = require('../services/members')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')

module.exports = {
  post: catchAsync(async (req, res, next) => {
    const { body } = req
    try {
      const response = await createMember(body)
      return endpointResponse({
        res,
        code: 201,
        message: 'Member created successfully',
        body: response,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error creating member] - [members - POST]: ${err.message}`,
      )
      return next(httpError)
    }
  }),

  put: catchAsync(async (req, res, next) => {
    const { params: { id }, body } = req
    try {
      const responseBody = await updateMember(id, body)
      return endpointResponse({
        res,
        code: 200,
        message: 'Member updated successfully',
        body: responseBody,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error updating member] - [members/${id} - POST]: ${err.message}`,
      )
      return next(httpError)
    }
  }),
}
