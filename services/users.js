const bcrypt = require('bcrypt')
const { User } = require('../database/models')
const { ErrorObject } = require('../helpers/error')
const { generateToken } = require('../middlewares/jwt')

exports.findOneByEmail = (email) => User.findOne({
  where: { email },
  attributes: { exclude: ['password'] },
})

exports.createUser = async ({
  firstName, lastName, email, password,
}) => {
  try {
    const existingUser = await this.findOneByEmail(email)

    if (existingUser) {
      throw new ErrorObject('Email is already in use', 400)
    }

    const newUser = await User.create({
      roleId: 2,
      firstName,
      lastName,
      email,
      password,
    })

    // removes password from returned user
    newUser.password = undefined

    return newUser
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
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

exports.loginUser = async ({
  email, password,
}) => {
  try {
    const user = await User.findOne({ where: { email } })
    if (!user || !bcrypt.compareSync(password, user.password)) {
      throw new ErrorObject('Credentials not validat', 404)
    }
    const token = generateToken(user.dataValues)
    return token
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
