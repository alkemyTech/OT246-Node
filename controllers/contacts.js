const createHttpError = require('http-errors')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')
const { createContact } = require('../services/contacts')

module.exports = {
  post: catchAsync(async (req, res, next) => {
    try {
      const responseBody = await createContact(req.body)

      endpointResponse({
        res,
        code: 201,
        message: 'Contact created successfully',
        body: responseBody,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error creating contact] - [contacts - POST]: ${err.message}`,
      )
      next(httpError)
    }
  }),
}
