const newBody = {
  name: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
    isAlphaWithSpace: { errorMessage: 'Must contain alphabetic characters only' },
  },
  content: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
    isAlphaWithSpace: { errorMessage: 'Must contain alphabetic characters only' },
  },
  image: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
    isURL: { errorMessage: 'Must be a valid URL' },
    isOptional: true,
  },
}
module.exports = { newBody }
