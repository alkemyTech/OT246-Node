const registerBody = {
  firstName: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
    isAlpha: { errorMessage: 'Must contain alphabetic characters only' },
  },
  lastName: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
    isAlpha: { errorMessage: 'Must contain alphabetic characters only' },
  },
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

module.exports = { registerBody }
