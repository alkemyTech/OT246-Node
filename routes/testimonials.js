const router = require('express').Router()
const { post, put } = require('../controllers/testimonials')
const { isUserAdmin } = require('../middlewares/adminVerification')
const { validateSchema } = require('../middlewares/validations')
const { testimonialBody } = require('../schemas/testimonials')

router.post('/', isUserAdmin, validateSchema(testimonialBody), post)
router.put('/:id', isUserAdmin, put)

module.exports = router
