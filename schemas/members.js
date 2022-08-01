const memberBody = {
  name: {
    in: 'body',
    trim: true,
    isLength: {
      options: { min: 5 },
      errorMessage: 'Name must be at least 4 characters long',
    },
    matches: {
      options: [/^[A-Za-z? ,_-]+$/],
      errorMessage: 'Name must be string',
    },
    notEmpty: { errorMessage: 'Must not be empty' },
  },
  image: {
    in: 'body',
    trim: true,
    optional: true,
    isURL: { errorMessage: 'Must be a valid URL' },
  },
  facebookUrl: {
    in: 'body',
    trim: true,
    optional: true,
    isURL: { errorMessage: 'Must be a valid URL' },
  },
  instagramUrl: {
    in: 'body',
    trim: true,
    optional: true,
    isURL: { errorMessage: 'Must be a valid URL' },
  },
  linkedinUrl: {
    in: 'body',
    trim: true,
    optional: true,
    isURL: { errorMessage: 'Must be a valid URL' },
  },
  description: {
    in: 'body',
    trim: true,
    matches: {
      options: [/^[A-Za-z0-9? ,_-]+$/],
      errorMessage: 'Description must be alphanumeric',
    },
    optional: true,
    isURL: { errorMessage: 'Must be a valid URL' },
  },
}

module.exports = { memberBody }
