const { ErrorObject } = require('../helpers/error')

exports.isUserAdmin = async (req, res, next) => {
  try {
    const { id } = req.params

    if (id === '1') {
      next()
    } else {
      throw new ErrorObject('Unauthorized', 403)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
