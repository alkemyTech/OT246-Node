const categoryBody = {
  name: {
    in: 'body',
    trim: true,
    isAlpha: { errorMessage: 'Must be a string' },
  },
}
module.exports = { categoryBody }
