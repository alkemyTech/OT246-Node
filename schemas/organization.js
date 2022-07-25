const organizationBody = {
  name: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
    isAlphaWithSpace: { errorMessage: 'Must contain alphabetic characters only' },
    isOptional: true,
  },
  image: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
    isURL: { errorMessage: 'Must be a valid URL' },
    isOptional: true,
  },
  address: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
    isAlphanumericWithSpace: { errorMessage: 'Must contain alphabetic characters only' },
    isOptional: true,
  },
  phone: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
    isNumeric: { errorMessage: 'Must contain numeric characters only' },
    isOptional: true,
  },
}

module.exports = { organizationBody }
