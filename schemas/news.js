const newBody = {
  name: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
  },
  content: {
    in: 'body',
    trim: true,
    matches: {
      options: [
        /^[-_ a-zA-Z0-9]+$/,
      ],
      errorMessage: 'Content must be alphanumeric',
    },
    notEmpty: { errorMessage: 'Must not be empty' },
  },
  image: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
    isURL: { errorMessage: 'Must be a valid URL' },
  },
  categoryId: {
    in: 'body',
    trim: true,
    isInt: true,
    notEmpty: { errorMessage: 'Must not be empty' },
  },
}

module.exports = { newBody }
