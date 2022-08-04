const { Comment, User } = require('../database/models')
const { ErrorObject } = require('../helpers/error')

exports.getComments = async () => {
  try {
    const comments = await Comment.findAll({
      order: [['createdAt', 'DESC']],
      attributes: ['body'],
    })

    return comments
  } catch (err) {
    throw new ErrorObject(err.message, 500)
  }
}
exports.getCommentsByNewsId = async (id) => {
  try {
    const comments = await Comment.findAll({
      include: User,
      where: { newsId: id },
    })

    return comments
  } catch (err) {
    throw new ErrorObject(err.message, 500)
  }
}
