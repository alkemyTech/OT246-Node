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

exports.updateMember = async (id, { name, image }) => {
  try {
    const member = await Member.findByPk(id, {
      attributes: { exclude: ['deletedAt'] },
    })
    if (!member) {
      throw new ErrorObject('Member not found', 404)
    }
    member.setAttributes({ name, image })
    await member.save()
    return member
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}

exports.deleteMember = async (id) => {
  try {
    const member = await Member.findByPk(id)
    if (!member) {
      throw new ErrorObject('Member not found', 404)
    }
    await member.destroy()
    return member
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}
