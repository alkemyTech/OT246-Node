const express = require('express')
const { destroy } = require('../controllers/users')

const router = express.Router()

// example of a route with index controller get function
router.delete('/:id', destroy)

module.exports = router
