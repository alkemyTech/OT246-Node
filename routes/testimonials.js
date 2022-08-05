const router = require('express').Router()
const {
  post,
  put,
  destroy,
  get,
} = require('../controllers/testimonials')
const { authUserAdmin } = require('../middlewares/authUserAdmin')
const { validateSchema } = require('../middlewares/validations')
const { testimonialBody } = require('../schemas/testimonials')

router.get('/', get)
router.post('/', authUserAdmin, validateSchema(testimonialBody), post)
router.put('/:id', authUserAdmin, put)
router.delete('/:id', authUserAdmin, destroy)

module.exports = router
