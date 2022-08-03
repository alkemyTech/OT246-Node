const createHttpError = require('http-errors')
const { createMember, deleteMember } = require('../services/members')
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
  destroy: catchAsync(async (req, res, next) => {
    const { params: { id } } = req
    try {
      const responseBody = await deleteMember(id)

      return endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'Member successfully deleted',
        body: responseBody,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error deleting member] - [members/${id} - DELETE ] - ${err.message}`,
      )
      return next(httpError)
    }
  }),
}
