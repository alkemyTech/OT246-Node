const organizationBody = {
  name: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
    optional: true,
  },
  image: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
    isURL: { errorMessage: 'Must be a valid URL' },
    optional: true,
  },
  address: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
    optional: true,
  },
  phone: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
    isNumeric: { errorMessage: 'Must contain numeric characters only' },
    optional: true,
  },
}

module.exports = { organizationBody }
