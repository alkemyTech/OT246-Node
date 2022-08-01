const createHttpError = require('http-errors')
const { catchAsync } = require('../helpers/catchAsync')
const { getContacts } = require('../services/contacts')

module.exports = {
  getContacts: catchAsync(async (req, res, next) => {
    try {
      const contacts = await getContacts()

      // convert model instances to POJOs
      const contactsPlain = JSON.parse(JSON.stringify(contacts))

      res.status(200).render('contacts', { title: 'Contacts', contacts: contactsPlain })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error retrieving contacts] - [backoffice/contacts - GET]: ${err.message}`,
      )
      next(httpError)
    }
  }),
}
