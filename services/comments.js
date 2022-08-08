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
