const testimonialBody = {
  name: {
    in: 'body',
    trim: true,
    isLength: {
      options: { min: 5 },
      errorMessage: 'Name must be at least 4 characters long',
    },
    matches: {
      options: [/^[A-Za-z0-9? ,_-]+$/],
      errorMessage: 'Name must be alphanumeric',
    },
    notEmpty: { errorMessage: 'Must not be empty' },
  },
  content: {
    in: 'body',
    trim: true,
    isLength: {
      options: { min: 5 },
      errorMessage: 'Name must be at least 4 characters long',
    },
    notEmpty: { errorMessage: 'Must not be empty' },
  },
  image: {
    in: 'body',
    trim: true,
    optional: true,
    isURL: { errorMessage: 'Must be a valid URL' },
  },
}

module.exports = { testimonialBody }
