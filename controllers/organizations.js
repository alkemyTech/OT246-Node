const createHttpError = require('http-errors')
const { getOrganization, updateOrganization } = require('../services/organizations')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')

module.exports = {
  get: catchAsync(async (req, res, next) => {
    try {
      const responseBody = await getOrganization()
      endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'Organization retrieved successfully',
        body: responseBody,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error retrieving organization] - [organization - GET]: ${err.message}`,

      )

      next(httpError)
    }
  }),
  post: catchAsync(async (req, res, next) => {
    try {
      const responseBody = await updateOrganization(req.body)

      endpointResponse({
        res,
        code: 200,
        message: 'Organization updated successfully',
        body: responseBody,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error to update data of Organization] - [organizations - POST]: ${err.message}`,
      )
      next(httpError)
    }
  }),
}
