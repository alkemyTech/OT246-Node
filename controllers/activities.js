const createHttpError = require('http-errors')
const { createActivity } = require('../services/activities')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')

module.exports = {
  post: catchAsync(async (req, res, next) => {
    const { body: { name, content, image } } = req
    try {
      const responseBody = await createActivity(name, content, image)

      return endpointResponse({
        res,
        code: 201,
        message: 'Activity was created successfully',
        body: responseBody,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error creating activity] - [activities - POST]: ${err.message}`,
      )
      return next(httpError)
    }
  }),
}
