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
  },
}
module.exports = { loginBody }
