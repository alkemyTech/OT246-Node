const updateOrganization = {
  name: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
    isAlpha: { errorMessage: 'Must contain alphabetic characters only' },
  },
  image: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
    isURL: { errorMessage: 'Must be a valid URL' },
  },
  address: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
    isAlphanumeric: { errorMessage: 'Must contain alphabetic characters only' },
  },
  phone: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
    isNumeric: { errorMessage: 'Must contain numeric characters only' },
  },
  email: {
    in: 'body',
    trim: true,
    isEmail: { errorMessage: 'Must be an email' },
    normalizeEmail: true,
  },
  welcomeText: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
    isAlphanumeric: { errorMessage: 'Must contain alphabetic characters only' },
  },
  aboutUsText: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
    isAlphanumeric: { errorMessage: 'Must contain alphabetic characters only' },
  },
}

module.exports = { updateOrganization }
