const { Router } = require('express')
const { register } = require('../controllers/users')
const { login } = require('../controllers/users')
const { validateSchema } = require('../middlewares/validations')
const { registerBody } = require('../schemas/register')
const { loginBody } = require('../schemas/login')

const router = Router()

router.post('/register', validateSchema(registerBody), register)
router.post('/login', validateSchema(loginBody), login)

module.exports = router
