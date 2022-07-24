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

exports.updateUser = async (id, data) => {
  try {
    let {
      firstName,
      lastName,
      email,
      password,
      photo,
    } = data
    const user = await User.findByPk(id)
    if (!user) {
      throw new ErrorObject('User not found', 404)
    }
    if (!firstName && !lastName && !email && !password && !photo) {
      throw new ErrorObject('No data provided', 400)
    }
    if (!firstName) {
      firstName = user.firstName
    }
    if (!lastName) {
      lastName = user.lastName
    }
    if (!email) {
      email = user.email
    }
    if (!password) {
      password = user.password
    }
    if (!photo) {
      photo = user.photo
    }
    await user.update({
      firstName,
      lastName,
      email,
      password,
      photo,
    })
    delete user.dataValues.password
    return user
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode)
  }
}

exports.loginUser = async ({
  email, password,
}) => {
  try {
    const user = await User.findOne({ where: { email } })
    if (!user || !bcrypt.compareSync(password, user.password)) {
      throw new ErrorObject('Invalid Credentials ', 401)
    }
    const token = generateToken({ email: user.dataValues.email })
    return token
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
