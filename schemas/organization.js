const organizationBody = {
  name: {
    in: 'body',
    trim: true,
    isLength: { options: { min: 4 }, errorMessage: 'Name must be at least 4 characters long' },
    matches: {
      options: [
        /^[a-zA-Z ]*$/,
      ],
      errorMessage: 'Name must be alphabetic',
    },
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
    matches: {
      options: [
        /^[A-Za-z]+ ?[0-9]+$/],
      errorMessage: 'Must be a valid address',
    },
    isLength: { options: { min: 5 }, errorMessage: 'Address must be at least 5 characters long' },
    optional: true,
  },
  phone: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
    isNumeric: { errorMessage: 'Must contain numeric characters only' },
    optional: true,
  },
  facebook: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
    isURL: { errorMessage: 'Must be a valid URL' },
  },
  instagram: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
    isURL: { errorMessage: 'Must be a valid URL' },
  },
  linkedin: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
    isURL: { errorMessage: 'Must be a valid URL' },
  },
}

module.exports = { organizationBody }
