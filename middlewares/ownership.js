const { authUser } = require('./authUser')

module.exports = {
  ownership: [
    authUser,
    (req, res, next) => {
      const userId = req.params?.id
      const { user } = req.user

      if (userId === user.id || user.roleId === 1) {
        next()
      } else {
        res.status(403).send()
      }
    },
  ],
}
