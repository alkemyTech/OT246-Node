const createHttpError = require('http-errors')
const { getContacts, createContact } = require('../services/contacts')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')
const { sendMailRegistrationContact } = require('../services/sendMail')

module.exports = {
  get: catchAsync(async (req, res, next) => {
    try {
      const responseBody = await getContacts()

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
        `[Error retrieving contacts] - [contacts - GET]: ${err.message}`,
      )
      return next(httpError)
    }
  }),

  post: catchAsync(async (req, res, next) => {
    const { body } = req
    try {
      const responseBody = await createContact(body)

      await sendMailRegistrationContact(body.email, { name: body.name, email: body.email })
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
