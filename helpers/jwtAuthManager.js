const jwt = require('jsonwebtoken')

module.exports = {
  generateToken: (user) => {
    const signToken = jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: '1h',
    })
    return signToken
  },
  verifyToken: (token) => {
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET)
    return verifyToken
  },
}
