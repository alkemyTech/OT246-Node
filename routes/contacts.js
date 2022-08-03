const { Router } = require('express')
const { get, post } = require('../controllers/contacts')
const { authUser } = require('../middlewares/authUser')
const { isUserAdmin } = require('../middlewares/adminVerification')
const { validateSchema } = require('../middlewares/validations')
const { contactBodyPost } = require('../schemas/contacts')

const router = Router()

router.get('/', isUserAdmin, get)
router.post('/', authUser, validateSchema(contactBodyPost), post)

module.exports = router
