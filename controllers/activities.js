const createHttpError = require('http-errors')
const { createActivity, updateActivity } = require('../services/activities')
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
        message: 'Activity created successfully',
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

  put: catchAsync(async (req, res, next) => {
    const { body, params: { id } } = req
    try {
      const responseBody = await updateActivity(id, body)

      return endpointResponse({
        res,
        code: 200,
        message: 'Activity updated successfully',
        body: responseBody,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error updating activity] - [activities/${id} - PUT]: ${err.message}`,
      )
      return next(httpError)
    }
  }),
}
