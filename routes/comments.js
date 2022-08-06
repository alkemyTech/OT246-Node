const { Router } = require('express')

const { get, post, destroy } = require('../controllers/comments')
const { authUser } = require('../middlewares/authUser')
const { authUserAdmin } = require('../middlewares/authUserAdmin')
const { validateSchema } = require('../middlewares/validations')
const { commentBodyPost } = require('../schemas/comments')

const router = Router()

router.get('/', authUserAdmin, get)
router.post('/', authUser, validateSchema(commentBodyPost), post)
router.delete('/:id', authUser, destroy)

module.exports = router
