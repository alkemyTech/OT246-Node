const testimonialBody = {
  name: {
    in: 'body',
    trim: true,
    isLength: {
      options: { min: 5 },
      errorMessage: 'Name must be at least 4 characters long',
    },
    matches: {
      options: [/^[A-Za-z0-9? ,_-]+$$/],
      errorMessage: 'Name must be alphabetic',
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
    matches: {
      options: [/^[A-Za-z0-9? ,_-]+$/],
      errorMessage: 'Content must be alphabetic',
    },
    notEmpty: { errorMessage: 'Must not be empty' },
  },
  image: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
    isURL: { errorMessage: 'Must be a valid URL' },
    optional: true,
  },
}

module.exports = { testimonialBody }
