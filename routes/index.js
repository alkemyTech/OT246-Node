const express = require('express')
const { get } = require('../controllers/index')
const organizationsRouter = require('./organizations')
const slidesRouter = require('./slides')

const router = express.Router()

// example of a route with index controller get function
router.get('/', get)
router.use('/organization', organizationsRouter)
router.use('/slide', slidesRouter)

module.exports = router
