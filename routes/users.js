const express = require('express')
const { deleteById } = require('../controllers/users')

const router = express.Router()

// example of a route with index controller get function
router.delete('/:id', deleteById)

module.exports = router
