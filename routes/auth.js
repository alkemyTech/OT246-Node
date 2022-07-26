const { Router } = require('express')
const { register, login, getData } = require('../controllers/users')
const { validateSchema } = require('../middlewares/validations')
const { authUser } = require('../middlewares/authUser')
const { registerBody } = require('../schemas/register')
const { loginBody } = require('../schemas/login')

const router = Router()

router.post('/register', validateSchema(registerBody), register)
router.post('/login', validateSchema(loginBody), login)
router.get('/me', authUser, getData)

module.exports = router
