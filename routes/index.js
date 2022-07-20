const express = require('express')
const { get } = require('../controllers/index')
const userRouter = require('./users')
const organizationsRouter = require('./organizations')

const router = express.Router()

// example of a route with index controller get function
router.get('/', get)
router.use('/users', userRouter)
router.use('/organization', organizationsRouter)

module.exports = router
