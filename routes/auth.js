const { Router } = require('express')
const { register } = require('../controllers/users')
const { getData } = require('../controllers/users')
const authUser = require('../middlewares/authUser')
const { validateSchema } = require('../middlewares/validations')
const { registerBody } = require('../schemas/register')

const router = Router()

router.post('/register', validateSchema(registerBody), register)
router.get('/me', authUser, getData)

module.exports = router
