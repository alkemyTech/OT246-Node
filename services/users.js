const { User } = require('../database/models')
const { ErrorObject } = require('../helpers/error')

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
      firstName, lastName, email, password,
    })

    // removes password from returned user
    newUser.password = undefined

    return newUser
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
