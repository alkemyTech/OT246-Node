const { ForeignKeyConstraintError } = require('sequelize')
const { Comment, User, New } = require('../database/models')
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
    const newsById = await New.findByPk(id)
    if (!newsById) {
      throw new ErrorObject('Not found News', 404)
    }
    const comments = await Comment.findAll({
      include: User,
      where: { newsId: id },
    })

    return comments
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
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
