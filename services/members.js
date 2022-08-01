const { Member } = require('../database/models')
const { ErrorObject } = require('../helpers/error')

exports.createMember = async ({
  name,
  facebookUrl,
  instagramUrl,
  linkedinUrl,
  image,
  description,
}) => {
  try {
    const newMember = await Member.create({
      name,
      facebookUrl,
      instagramUrl,
      linkedinUrl,
      image,
      description,
    })
    return newMember
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}
