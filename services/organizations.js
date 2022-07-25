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

exports.updateOrganization = async (data) => {
  try {
    const organization = await Organization.update(data, { where: { id: 1 } })
    const [updated] = organization
    if (updated === 0) {
      throw new ErrorObject('Organization not found', 404)
    }
    const organizationUpdated = await Organization.findOne({ where: { id: 1 }, attributes: ['name', 'image', 'phone', 'address'] })
    return organizationUpdated
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}
