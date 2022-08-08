const router = require('express').Router()
const {
  getById,
  get,
  post,
  put,
  destroy,
} = require('../controllers/news')
const { getCommentsByNewsId } = require('../controllers/comments')
const { authUser } = require('../middlewares/authUser')
const { validateSchema } = require('../middlewares/validations')
const { newBodyPost, newBodyPut } = require('../schemas/news')
const { authUserAdmin } = require('../middlewares/authUserAdmin')

router.get('/:id', authUserAdmin, getById)
router.get('/', get)
router.post('/', authUserAdmin, validateSchema(newBodyPost), post)
router.put('/:id', authUserAdmin, validateSchema(newBodyPut), put)
router.delete('/:id', authUserAdmin, destroy)
router.get('/:id/comments', authUser, getCommentsByNewsId)

module.exports = router
