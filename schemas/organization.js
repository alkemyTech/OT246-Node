const organizationBody = {
  name: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
    isAlphaWithSpace: { errorMessage: 'Must contain alphabetic characters only' },
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
    isAlphanumericWithSpace: { errorMessage: 'Must contain alphabetic characters only' },
  },
  phone: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
    isNumeric: { errorMessage: 'Must contain numeric characters only' },
  },
}

module.exports = { organizationBody }
