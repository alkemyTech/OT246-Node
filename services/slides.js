const { ErrorObject } = require('../helpers/error')
const { Slide } = require('../database/models')

module.exports = async (id) => {
  try {
    const getSlide = await Slide.findByPk(id)
    return getSlide
  } catch (err) {
    throw new ErrorObject(err.message, 500)
  }
}
