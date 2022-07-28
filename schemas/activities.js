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

const activityBodyPut = {
  name: {
    in: 'body',
    trim: true,
    optional: true,
    notEmpty: { errorMessage: 'Must not be empty' },
  },
  content: {
    in: 'body',
    trim: true,
    optional: true,
    notEmpty: { errorMessage: 'Must not be empty' },
  },
  image: {
    in: 'body',
    trim: true,
    isURL: { errorMessage: 'Must be an URL' },
    optional: true,
  },
}

module.exports = { activityBodyPost, activityBodyPut }
