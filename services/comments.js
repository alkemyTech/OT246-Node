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

exports.deleteComment = async (id) => {
  try {
    const comment = await Comment.findByPk(id)
    if (!comment) {
      throw new ErrorObject('Comment not found', 404)
    }
    await comment.destroy()
    return comment
  } catch (err) {
    throw new ErrorObject(err.message, 500)
  }
}
