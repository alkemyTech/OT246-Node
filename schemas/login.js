const loginBody = {
  email: {
    in: 'body',
    trim: true,
    isEmail: { errorMessage: 'Must be an email' },
    normalizeEmail: true,
  },
  password: {
    in: 'body',
    isString: { errorMessage: 'Must be a string' },
    isStrongPassword: { errorMessage: 'Must be a strong password' },
  },
}
module.exports = { loginBody }
