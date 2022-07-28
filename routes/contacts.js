const { Router } = require('express')
const { post } = require('../controllers/contacts')
const { authUser } = require('../middlewares/authUser')
const { validateSchema } = require('../middlewares/validations')
const { contactBodyPost } = require('../schemas/contacts')

const router = Router()

router.post('/', authUser, validateSchema(contactBodyPost), post)
