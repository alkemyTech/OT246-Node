const createHttpError = require('http-errors')
const { getById } = require('../services/slides')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')

module.exports = {
  getById: catchAsync(async (req, res, next) => {
    try {
      const slide = await getById(req.params.id)
      endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'Slide',
        body: slide,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error retrieving slide] - [slides - GET /slides/${req.params.id}] - ${err.message}`,
      )
      next(httpError)
    }
  }),
}
