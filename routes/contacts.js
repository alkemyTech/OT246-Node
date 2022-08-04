const { Router } = require('express')
const { get, post } = require('../controllers/contacts')
const { authUser } = require('../middlewares/authUser')
const { authUserAdmin } = require('../middlewares/authUserAdmin')
const { validateSchema } = require('../middlewares/validations')
const { contactBodyPost } = require('../schemas/contacts')

const router = Router()

router.get('/', authUserAdmin, get)
router.post('/', authUser, validateSchema(contactBodyPost), post)

module.exports = router
