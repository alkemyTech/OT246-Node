const { Router } = require('express')
const { post } = require('../controllers/news')
const { validateSchema } = require('../middlewares/validations')
const { newBody } = require('../schemas/news')
const { authUser } = require('../middlewares/authUser')

const router = Router()

router.post('/', authUser, validateSchema(newBody), post)
// cambiar authUser por middleware correspondiente (cuando esté)

module.exports = router
