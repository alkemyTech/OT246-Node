const express = require('express')
const { destroy, put } = require('../controllers/users')

const router = express.Router()

// example of a route with index controller get function
router.delete('/:id', destroy)
router.put('/:id', put)

module.exports = router
