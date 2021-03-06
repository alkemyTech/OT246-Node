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
const { authUser } = require('../middlewares/authUser')

const router = Router()

router.get('/public', get)
router.get('/:id', getById)
router.post('/', authUser, validateSchema(categoryBodyPost), post)
router.put('/:id', authUser, validateSchema(categoryBodyPut), put)
router.delete('/:id', authUser, destroy)

module.exports = router
