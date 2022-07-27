const activityBodyPost = {
  name: {
    in: 'body',
    trim: true,
    optional: false,
    notEmpty: { errorMessage: 'Must not be empty' },
  },
  content: {
    in: 'body',
    trim: true,
    optional: false,
    notEmpty: { errorMessage: 'Must not be empty' },
  },
  image: {
    in: 'body',
    trim: true,
    isURL: { errorMessage: 'Must be an URL' },
    optional: false,
  },
}
module.exports = { activityBodyPost }
