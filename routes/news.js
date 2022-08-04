const router = require('express').Router()
const {
  getById,
  post,
  put,
  destroy,
} = require('../controllers/news')
const { authUserAdmin } = require('../middlewares/authUserAdmin')
const { validateSchema } = require('../middlewares/validations')
const { newBodyPost, newBodyPut } = require('../schemas/news')

router.get('/:id', authUserAdmin, getById)
router.post('/', authUserAdmin, validateSchema(newBodyPost), post)
router.put('/:id', authUserAdmin, validateSchema(newBodyPut), put)
router.delete('/:id', authUserAdmin, destroy)

module.exports = router
