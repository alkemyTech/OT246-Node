const { User } = require('../database/models/index')
const { ErrorObject } = require('../helpers/error')

exports.adminVerification = async (req, res, next) => {
    try {
        const { id } = req.params
        const user = await User.findOne({
            where: {
                id
            },
            attributes: ["roleId"]
        })

        if (user && user.roleId === 1) {
            next()
        } else {
            throw new ErrorObject("Unauthorized", 403)
        }

    } catch (error) {
        throw new ErrorObject(error.message, error.statusCode || 500)
    }
}