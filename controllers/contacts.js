const createHttpError = require('http-errors')
const { getContacts } = require('../services/contacts')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')

module.exports = {
  get: catchAsync(async (req, res, next) => {
    try {
      return endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'OK',
        body: await getContacts(),
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error retrieving contacts] - [contacts - GET]: ${err.message}`,
      )
      return next(httpError)
    }
  }),
}
