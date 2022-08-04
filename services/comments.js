const { Comment, User } = require('../database/models')
const { ErrorObject } = require('../helpers/error')

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
