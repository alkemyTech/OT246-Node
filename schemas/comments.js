const commentBody = {
  newsId: {
    in: 'body',
    isInt: { errorMessage: 'Must be an integer' },
  },
  body: {
    in: 'body',
    notEmpty: { errorMessage: 'Must not be empty' },
  },
}

module.exports = { commentBody }
