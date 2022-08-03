const memberBody = {
  name: {
    in: 'body',
    trim: true,
    isLength: {
      options: { min: 5 },
      errorMessage: 'Name must be at least 4 characters long',
    },
    matches: {
      options: [/^[A-Za-z? ,_-]+$/],
      errorMessage: 'Name must be string',
    },
    notEmpty: { errorMessage: 'Must not be empty' },
  },
}

module.exports = { memberBody }
