const router = require('express').Router()
const { post, put, destroy } = require('../controllers/testimonials')
const { isUserAdmin } = require('../middlewares/authUserAdmin')
const { validateSchema } = require('../middlewares/validations')
const { testimonialBody } = require('../schemas/testimonials')

router.post('/', isUserAdmin, validateSchema(testimonialBody), post)
router.put('/:id', isUserAdmin, put)
router.delete('/:id', isUserAdmin, destroy)

module.exports = router
