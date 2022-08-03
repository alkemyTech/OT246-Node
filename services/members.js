const { Member } = require('../database/models')
const { ErrorObject } = require('../helpers/error')

exports.createMember = async ({ name, image }) => {
  try {
    const newMember = await Member.create({
      name,
      image,
    })
    return newMember
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}
