const { Activity } = require('../database/models')
const { ErrorObject } = require('../helpers/error')

exports.createActivity = async (name, content) => {
  try {
    const activity = await Activity.create({ name, content })
    return activity
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}
