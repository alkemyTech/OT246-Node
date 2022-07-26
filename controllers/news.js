const createHttpError = require('http-errors')
const { getNewsById } = require('../services/news')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')

module.exports = {
  getById: catchAsync(async (req, res, next) => {
    try {
      const responseBody = await getNewsById(req.params.id)
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
        `[Error retrieving news] - [news - GET /news/${req.params.id}]: ${err.message}`,
      )
      return next(httpError)
    }
  }),
}
