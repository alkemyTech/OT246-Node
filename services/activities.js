const { Activity } = require('../database/models')
const { ErrorObject } = require('../helpers/error')

exports.createActivity = async (name, content, image) => {
  try {
    const activity = await Activity.create({ name, content, image })
    return activity
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}

exports.updateActivity = async (id, name, content, image) => {
  try {
    const activity = await Activity.update({ name, content, image },
      {
        where: {
          id
        }
      })
    const [afectedRows] = activity
    if (afectedRows === 0) {
      throw new ErrorObject('Activity not found', 404)
    }
    const updatedActivity = await Activity.findOne({
      where: { id },
      attributes: ['name', 'image', 'content']
    })

    return updatedActivity
  } catch (err) {
    throw new ErrorObject(err.message, err.statusCode || 500)
  }
}

