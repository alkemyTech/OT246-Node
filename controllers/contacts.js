const createHttpError = require('http-errors')
const { getContacts } = require('../services/contacts')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')
// const { sendMailRegistrationContact } = require('../services/sendMail')

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
  post: catchAsync(async (req, res, next) => {
    try {
      // const contact = await algo ...

      // a Descomentar
      // await sendMailRegistrationContact(contact.email, {
      //   'name': contact.name,
      //   'email': contact.email,
      //   'phone': contact.phone,
      // })
      endpointResponse({
        res,
        code: 201,
        message: 'Contact created successfully',
        // body: responseBody,
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
