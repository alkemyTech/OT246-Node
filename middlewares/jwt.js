const jwt = require('jsonwebtoken')

module.exports = {
  generateToken: (user) => {
    try {
      const signToken = jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: '1h',
      })
      return signToken
    } catch (err) {
      throw new Error('Error while generating token')
    }
  },
  verifyToken: (token) => {
    try {
      const verifyToken = jwt.verify(token, process.env.JWT_SECRET)
      return verifyToken
    } catch (err) {
      throw new Error('Error while verifying token')
    }
  },
}
