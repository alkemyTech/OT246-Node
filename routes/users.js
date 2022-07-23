const express = require('express')
const { destroy, update } = require('../controllers/users')

const router = express.Router()

// example of a route with index controller get function
router.delete('/:id', destroy)
router.patch('/:id', update)

module.exports = router
