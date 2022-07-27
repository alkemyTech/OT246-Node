const createHttpError = require('http-errors')
const { createActivity } = require('../services/categories')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')

catchAsync(async (req, res, next) => {
  const { body } = req
  try {
    const response = await createActivity(body)
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
})
