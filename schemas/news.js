const newBody = {
  name: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
  },
  content: {
    in: 'body',
    trim: true,
<<<<<<< HEAD
=======
    matches: {
      options: [
        /^[-_ a-zA-Z0-9]+$/,
      ],
      errorMessage: 'Content must be alphanumeric',
    },
>>>>>>> 58b6c23d7748500622c9908116d8c6994750bc5f
    notEmpty: { errorMessage: 'Must not be empty' },
  },
  image: {
    in: 'body',
    trim: true,
    notEmpty: { errorMessage: 'Must not be empty' },
    isURL: { errorMessage: 'Must be a valid URL' },
  },
<<<<<<< HEAD
=======
  categoryId: {
    in: 'body',
    trim: true,
    isInt: true,
    notEmpty: { errorMessage: 'Must not be empty' },
  },
>>>>>>> 58b6c23d7748500622c9908116d8c6994750bc5f
}
module.exports = { newBody }
