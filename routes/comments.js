const { Router } = require('express')
const { post } = require('../controllers/comments')
const { authUser } = require('../middlewares/authUser')
const { validateSchema } = require('../middlewares/validations')
const { commentBody } = require('../schemas/comments')

const router = Router()

router.post('/', authUser, validateSchema(commentBody), post)

module.exports = router
