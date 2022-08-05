const { ForeignKeyConstraintError } = require('sequelize')
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

exports.createComment = async ({ userId, newsId, body }) => {
  try {
    const comment = await Comment.create({ userId, newsId, body })

    return comment
  } catch (err) {
    if (err instanceof ForeignKeyConstraintError) {
      throw new ErrorObject('New not found', 404)
    }

    throw new ErrorObject(err.message, 500)
  }
}

exports.updateComment = async (id, body, userId) => {
  try {
    const comment = await Comment.findByPk(id)
    if (!comment) {
      throw new ErrorObject('Comment not found', 404)
    }

    if (comment.dataValues.userId === userId) {
      return await comment.update({ body })
    }

    throw new ErrorObject('This user have no permission to edit this comment', 403)
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}
