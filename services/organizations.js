const { Organization } = require('../database/models')
const { ErrorObject } = require('../helpers/error')

/**
 * Returns all organizations' public information.
 * @returns {Promise<Organization[]>} Array of organizations
 */
exports.get = async () => {
  try {
    const result = await Organization.findAll({
      attributes: ['id', 'name', 'image', 'phone', 'address'],
    })

    return result
  } catch (err) {
    throw new ErrorObject(err.message, 500)
  }
}
