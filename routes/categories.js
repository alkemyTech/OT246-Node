const { Router } = require('express')
const {
  get,
  getById,
  post,
  put,
  destroy,
  getPaginated,
} = require('../controllers/categories')
const { validateSchema } = require('../middlewares/validations')
const { categoryBodyPost, categoryBodyPut } = require('../schemas/categories')
const { authUserAdmin } = require('../middlewares/authUserAdmin')
const { authUser } = require('../middlewares/authUser')

const router = Router()

router.get('/public', authUserAdmin, get)
router.get('/', authUser, getPaginated)
router.get('/:id', authUserAdmin, getById)
router.post('/', authUserAdmin, validateSchema(categoryBodyPost), post)
router.put('/:id', authUserAdmin, validateSchema(categoryBodyPut), put)
router.delete('/:id', authUserAdmin, destroy)

module.exports = router
