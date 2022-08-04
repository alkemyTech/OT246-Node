const { Router } = require('express')
const {
  get,
  getById,
  post,
  put,
  destroy,
} = require('../controllers/categories')
const { validateSchema } = require('../middlewares/validations')
const { categoryBodyPost, categoryBodyPut } = require('../schemas/categories')
const { authUserAdmin } = require('../middlewares/authUserAdmin')

const router = Router()

router.get('/public', authUserAdmin, get)
router.get('/:id', authUserAdmin, getById)
router.post('/', authUserAdmin, validateSchema(categoryBodyPost), post)
router.put('/:id', authUserAdmin, validateSchema(categoryBodyPut), put)
router.delete('/:id', authUserAdmin, destroy)

module.exports = router
