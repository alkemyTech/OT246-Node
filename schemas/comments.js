const commentBodyPost = {
  newsId: {
    in: 'body',
    isInt: { errorMessage: 'Must be an integer' },
  },
  body: {
    in: 'body',
    notEmpty: { errorMessage: 'Must not be empty' },
  },
}

module.exports = { commentBodyPost }
