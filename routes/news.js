const router = require('express').Router()
const {
  getById,
  post,
  put,
  destroy,
} = require('../controllers/news')
const { getCommentsByNewsId } = require('../controllers/comments')
const { authUser } = require('../middlewares/authUser')
const { validateSchema } = require('../middlewares/validations')
const { newBodyPost, newBodyPut } = require('../schemas/news')

router.get('/:id', authUser, getById)
router.post('/', authUser, validateSchema(newBodyPost), post)
router.put('/:id', authUser, validateSchema(newBodyPut), put)
router.delete('/:id', authUser, destroy)
router.get('/:id/comments', authUser, getCommentsByNewsId)

module.exports = router
