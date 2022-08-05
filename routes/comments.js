const { Router } = require('express')
const { get, post, put } = require('../controllers/comments')
const { authUser } = require('../middlewares/authUser')
const { authUserAdmin } = require('../middlewares/authUserAdmin')
const { validateSchema } = require('../middlewares/validations')
const { commentBodyPost, commentBodyPut } = require('../schemas/comments')

const router = Router()

router.get('/', authUserAdmin, get)
router.post('/', authUser, validateSchema(commentBodyPost), post)
router.put('/:id', authUser, validateSchema(commentBodyPut), put)

module.exports = router
