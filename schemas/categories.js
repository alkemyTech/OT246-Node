const categoryBodyPost = {
  name: {
    in: 'body',
    trim: true,
    isAlpha: { errorMessage: 'Must be a string' },
  },
}

const categoryBodyPut = {
  name: {
    ...categoryBodyPost.name,
    optional: true,
  },
  description: {
    in: 'body',
    trim: true,
    optional: true,
    notEmpty: { errorMessage: 'Must not be empty' },
  },
  image: {
    in: 'body',
    trim: 'true',
    isUrl: { errorMessage: 'Must be an URL' },
    optional: true,
  },
}

module.exports = { categoryBodyPost, categoryBodyPut }
