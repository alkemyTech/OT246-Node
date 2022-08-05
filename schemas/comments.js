const commentBodyPost = {
  newsId: {
    in: 'body',
    isInt: { errorMessage: 'Must be an integer' },
  },
  body: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
  },
}

module.exports = { commentBodyPost }
