const router = require('express').Router()
const { post } = require('../controllers/testimonials')
const { authUser } = require('../middlewares/authUser')
const { isUserAdmin } = require('../middlewares/adminVerification')
const { validateSchema } = require('../middlewares/validations')
const { testimonialBody } = require('../schemas/testimonials')

router.post('/', authUser, isUserAdmin, validateSchema(testimonialBody), post)

module.exports = router
