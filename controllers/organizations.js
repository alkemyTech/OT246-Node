const createHttpError = require('http-errors')
const { getOrganization } = require('../services/organizations')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')

module.exports = {
  get: catchAsync(async (req, res, next) => {
    try {
      const responseBody = await getOrganization()

      return endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'OK',
        body: responseBody,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error retrieving organizations] - [organizations - GET]: ${err.message}`,
      )
      return next(httpError)
    }
  }),
}
