const newBodyPut = {
  name: {
    in: 'body',
    optional: true,
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
  },
  content: {
    in: 'body',
    optional: true,
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
  },
  image: {
    in: 'body',
    optional: 'true',
    trim: true,
    isURL: { errorMessage: 'Must be an URL' },
  },
  categoryId: {
    in: 'body',
    optional: true,
    isInt: { errorMessage: 'Must be an integer' },
    toInt: true,
  },
}

module.exports = { newBodyPut }
