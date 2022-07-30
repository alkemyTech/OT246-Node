const createHttpError = require('http-errors')
const { createActivity, updateActivity } = require('../services/activities')
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

  put: catchAsync(async (req, res, next) => {
    const { id } = req.params
    const data = req.body
    try {
      const response = await updateActivity(id, data)
      return endpointResponse({
        res,
        code: 200,
        message: 'Activity was updated successfully',
        body: response,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error updating activity] - [activities - PUT]: ${err.message}`,
      )
      return next(httpError)
    }
  }),
}
