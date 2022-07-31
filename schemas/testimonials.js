exports.testimonialsBody = {
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
  content: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
    optional: true,
  },
}
