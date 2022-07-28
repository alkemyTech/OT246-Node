const createHttpError = require('http-errors')
const { getContacts } = require('../services/contacts')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')

module.exports = {
  get: catchAsync(async (req, res, next) => {
    try {
      const contacts = await getContacts()
      return endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'OK',
        body: contacts,
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
