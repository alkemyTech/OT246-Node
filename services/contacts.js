const { Contact } = require('../database/models')
const { ErrorObject } = require('../helpers/error')

exports.getContacts = async () => {
  try {
    return await Contact.findAll()
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}

exports.createContact = async ({ name, email }) => {
  try {
    const contact = await Contact.create({ name, email })

    return contact
  } catch (err) {
    throw new ErrorObject(err.message, 500)
  }
}
