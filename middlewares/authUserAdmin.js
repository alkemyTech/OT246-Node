const { ErrorObject } = require('../helpers/error')
const { authUser } = require('./authUser')

exports.isUserAdmin = [
  authUser,
  (req, res, next) => {
    if (req.user && req.user.roleId === 1) {
      next()
    } else {
      throw new ErrorObject('This endpoint is for admins only', 403)
    }
  },
]
