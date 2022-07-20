const { User } = require('../database/models')
const { ErrorObject } = require('../helpers/error')

exports.deleteUserBy = async (id) => {
  try {
    const deletedUser = await User.findByPk(id)
    if (!deletedUser) {
      throw new ErrorObject('User not found', 404)
    }
    await deletedUser.destroy()
    return `${deletedUser.firstName} was deleted`
  } catch (err) {
    throw new ErrorObject(err.message, 404)
  }
}
