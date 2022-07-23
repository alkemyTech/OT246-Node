const { verifyToken } = require('./jwt')

module.exports = {
  ownership: (req, res, next) => {
    try {
      const userId = req.params.id
      const reqAuth = req.headers.authorization
      const authParts = reqAuth.split(' ')
      if (authParts.length === 2) {
        const JWT = authParts[1]
        const user = verifyToken(JWT)
        if (userId === user.id || user.roleId === 1) {
          next()
        } else {
          res.status(403).send()
        }
      } else {
        res.status(403).send()
      }
    } catch (error) {
      res.status(403).send(error)
    }
  },
}
