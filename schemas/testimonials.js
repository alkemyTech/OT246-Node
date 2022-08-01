exports.testimonialsBody = {
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
  content: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
    optional: true,
  },
}
