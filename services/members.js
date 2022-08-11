const { Member } = require('../database/models')
const { ErrorObject } = require('../helpers/error')
const Paginator = require('../helpers/paginator')

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

exports.getMembers = async () => {
  try {
    const members = await Member.findAll()

    return members
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}
exports.getMembersPaginated = async (page, baseURL) => {
  try {
    const cantMembers = await Member.count()
    const pager = new Paginator(Number(page), 'members', cantMembers)
    const { offset, limit } = pager.getRecordRange()

    const members = await Member.findAll({
      attributes: { exclude: ['deletedAt'] },
      offset,
      limit,
    })

    return { urls: pager.getAttachedUrl(baseURL), members }
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}
