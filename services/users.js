const { User } = require('../database/models')
const { ErrorObject } = require('../helpers/error')

/**
 * Deletes the user's public information.
 * @returns {Promise<User>} An user instance
 */

exports.deleteUserById = async (id) => {
  try {
    const deletedUser = await User.findByPk(id)
    if (!deletedUser) {
      throw new ErrorObject('User not found', 404)
    }
    const dateDelete = new Date()
    await deletedUser.destroy()
    return `${deletedUser.firstName} was deleted at ${dateDelete}`
  } catch (err) {
    throw new ErrorObject(err.message, 404)
  }
}
