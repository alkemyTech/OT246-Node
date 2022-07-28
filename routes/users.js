const express = require('express')
const { get, destroy, put } = require('../controllers/users')
const { authUser } = require('../middlewares/authUser')
const { isUserAdmin } = require('../middlewares/adminVerification')

const router = express.Router()

// example of a route with index controller get function
router.get('/', authUser, isUserAdmin, get)
router.delete('/:id', destroy)
router.put('/:id', put)

module.exports = router
