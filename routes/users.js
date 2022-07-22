const express = require('express')
const { get, destroy } = require('../controllers/users')

const router = express.Router()

// example of a route with index controller get function
router.get('/', get)
router.delete('/:id', destroy)

module.exports = router
