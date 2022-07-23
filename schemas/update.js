const updateBody = {
  firstName: {
    in: 'body',
    trim: true,
    isAlpha: { errorMessage: 'Must contain alphabetic characters only' },
    optional: true,
  },
  lastName: {
    in: 'body',
    trim: true,
    isAlpha: { errorMessage: 'Must contain alphabetic characters only' },
    optional: true,
  },
  email: {
    in: 'body',
    trim: true,
    isEmail: { errorMessage: 'Must be an email' },
    normalizeEmail: true,
    optional: true,
  },
  password: {
    in: 'body',
    isString: { errorMessage: 'Must be a string' },
    isStrongPassword: { errorMessage: 'Must be a strong password' },
    optional: true,
  },
}

module.exports = { updateBody }
