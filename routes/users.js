const express = require('express')
const { deleteUser } = require('../controllers/users')

const router = express.Router()

// example of a route with index controller get function
router.delete('/:id', deleteUser)

module.exports = router
