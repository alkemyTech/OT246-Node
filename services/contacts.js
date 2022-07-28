const { Contact } = require('../database/models')
const { ErrorObject } = require('../helpers/error')

exports.getContacts = async () => {
  try {
    const contacts = await Contact.findAll()
    if (contacts.length === 0) {
      throw new ErrorObject('No contacts found', 404)
    }
    return contacts
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}
