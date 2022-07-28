const { ErrorObject } = require('../helpers/error')

exports.isUserAdmin = async (req, res, next) => {
  try {
    const { roleId } = req.body

    if (roleId === '1') {
      next()
    } else {
      throw new ErrorObject('This endpoint is for admins only', 403)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
