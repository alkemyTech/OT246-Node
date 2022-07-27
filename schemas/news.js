const newBody = {
  name: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
  },
  content: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
  },
  image: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
    isURL: { errorMessage: 'Must be a valid URL' },
  },
}
module.exports = { newBody }
