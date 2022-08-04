const { Comment } = require('../database/models')
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

exports.updateComment = async (id, body, userId) => {
  try {
    const comment = await Comment.findByPk(id)
    if (!comment) {
      throw new ErrorObject('Comment not found', 404)
    }
    if (comment.userId === userId) {
      return await comment.update({ body })
    }
    throw new ErrorObject('This user have no permission to edit this comment', 403)
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}
