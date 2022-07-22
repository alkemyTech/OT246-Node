const { User } = require('../database/models')
const { ErrorObject } = require('../helpers/error')

exports.getAllUsers = async () => {
  try {
    const users = User.findAll({
      attributes: { exclude: ['password', 'deletedAt'] },
    })

    return users
  } catch (err) {
    throw new ErrorObject(err.message, 500)
  }
}

exports.deleteUserBy = async (id) => {
  try {
    const deletedUser = await User.findByPk(id)
    if (!deletedUser) {
      throw new ErrorObject('User not found', 404)
    }
    await deletedUser.destroy()
    return deletedUser
  } catch (err) {
    throw new ErrorObject(err.message, 404)
  }
}
