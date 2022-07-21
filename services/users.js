const { User } = require('../database/models')

exports.findOneByEmail = (email) => User.findOne({
  where: { email },
  attributes: { exclude: ['password'] },
})
