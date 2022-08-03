const { Router } = require('express')
const { post } = require('../controllers/comments')
const { authUser } = require('../middlewares/authUser')
const { validateSchema } = require('../middlewares/validations')
const { commentsBodyPost } = require('../schemas/comments')

const router = Router()

router.post('/', authUser, validateSchema(commentsBodyPost), post)

module.exports = router
