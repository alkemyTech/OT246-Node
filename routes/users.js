const express = require('express')
const { updateBody } = require('../schemas/update')
const { validateSchema } = require('../middlewares/validations')
const { destroy, update } = require('../controllers/users')

const router = express.Router()

// example of a route with index controller get function
router.delete('/:id', destroy)
router.patch('/:id', validateSchema(updateBody), update)

module.exports = router
