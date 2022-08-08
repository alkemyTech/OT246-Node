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

const commentBodyPut = {
  body: {
    ...commentBodyPost.body,
  },
}

module.exports = { commentBodyPost, commentBodyPut }
