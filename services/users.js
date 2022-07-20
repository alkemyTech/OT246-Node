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
      throw new ErrorObject(404, 'User not found ')
    }
    const name = deletedUser.firtname
    await deletedUser.destroy()
    return name
  } catch (err) {
    throw new ErrorObject(err.message, 404)
  }
}
