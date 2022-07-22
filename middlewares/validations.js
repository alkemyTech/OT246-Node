const { validationResult, checkSchema } = require('express-validator')
const { ErrorObject } = require('../helpers/error')

exports.validateSchema = (schema) => [
  checkSchema(schema),
  (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      const status = 400

      res
        .status(status)
        .json(new ErrorObject('Validation error', status, errors.array()))
    } else {
      next()
    }
  },
]
