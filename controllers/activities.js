const createHttpError = require('http-errors')
const { createActivity } = require('../services/activities')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')

module.exports = {
  post: catchAsync(async (req, res, next) => {
    const { name, content, image } = req.body
    try {
      const response = await createActivity(name, content, image)
      return endpointResponse({
        res,
        code: 201,
        message: 'Activity was created successfully',
        body: response,
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
