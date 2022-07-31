const router = require('express').Router()
const { put } = require('../controllers/testimonials')
const { authUser, validateSchema, isUserAdmin } = require('../middlewares')
const { testimonialsBody } = require('../schemas')

router.put('/:id', authUser, isUserAdmin, validateSchema(testimonialsBody), put)

module.exports = router
