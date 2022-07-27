const newBodyPost = {
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

const newBodyPut = {
  name: {
    ...newBodyPost.name,
    optional: true,
  },
  content: {
    ...newBodyPost.content,
    optional: true,
  },
  image: {
    ...newBodyPost.image,
    optional: true,
  },
  categoryId: {
    ...newBodyPost.categoryId,
    optional: true,
  },
}

module.exports = { newBodyPost, newBodyPut }
