const { Contact } = require('../database/models')
const { ErrorObject } = require('../helpers/error')

exports.createContact = async ({ name, email }) => {
  try {
    const contact = await Contact.create({ name, email })

    return contact
  } catch (err) {
    throw new ErrorObject(err.message, 500)
  }
}
