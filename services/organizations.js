const { Organization } = require('../database/models')
const { ErrorObject } = require('../helpers/error')

/**
 * Gets the organization's public information.
 * @returns {Promise<Organization>} An organization instance
 * @throws {ErrorObject} Some error ocurred while fetching the database.
 */
exports.getOrganization = async () => {
  try {
    const result = await Organization.findOne({
      attributes: ['id', 'name', 'image', 'phone', 'address'],
    })

    return result
  } catch (err) {
    throw new ErrorObject(err.message, 500)
  }
}
