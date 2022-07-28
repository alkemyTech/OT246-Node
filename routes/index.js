const express = require('express')
const { get } = require('../controllers/index')
const authRouter = require('./auth')
const userRouter = require('./users')
const categoriesRouter = require('./categories')
const contactsRouter = require('./contacts')
const newsRouter = require('./news')
const organizationsRouter = require('./organizations')
const slidesRouter = require('./slides')
const activitiesRouter = require('./activities')

const router = express.Router()

// example of a route with index controller get function
router.get('/', get)
router.use('/auth', authRouter)
router.use('/users', userRouter)
router.use('/categories', categoriesRouter)
router.use('/contacts', contactsRouter)
router.use('/news', newsRouter)
router.use('/organization', organizationsRouter)
router.use('/slide', slidesRouter)
router.use('/activities', activitiesRouter)

module.exports = router
