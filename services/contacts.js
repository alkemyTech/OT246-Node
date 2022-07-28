const { Contact } = require('../database/models')
const { ErrorObject } = require('../helpers/error')

exports.getContacts = async () => {
  try {
    return await Contact.findAll()
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}
