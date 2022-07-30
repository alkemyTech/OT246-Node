const contactBodyPost = {
  name: {
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
  },
  email: {
    trim: true,
    isEmail: { errorMessage: 'Must be an email' },
    normalizeEmail: true,
  },
}

module.exports = { contactBodyPost }
