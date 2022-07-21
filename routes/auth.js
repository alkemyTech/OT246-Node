const { Router } = require('express')
const { register } = require('../controllers/auth')
const { validateSchema } = require('../middlewares/validations')
const { registerBody } = require('../schemas/register')

const router = Router()

router.post('/register', validateSchema(registerBody), register)

module.exports = router
