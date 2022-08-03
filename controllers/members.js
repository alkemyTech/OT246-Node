const createHttpError = require('http-errors')
const { createMember, getMembers } = require('../services/members')
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
  get: catchAsync(async (req, res, next) => {
    try {
      const response = await getMembers()
      return endpointResponse({
        res,
        code: 200,
        message: 'Members retrieved successfully',
        body: response,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error retrieving members] - [members - GET]: ${err.message}`,
      )
      return next(httpError)
    }
  }),
}
