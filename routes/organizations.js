const { Router } = require('express')
const { get, post } = require('../controllers/organizations')
const { validateSchema } = require('../middlewares/validations')
const { organizationBody } = require('../schemas/organization')
const { authUser } = require('../middlewares/authUser')

const router = Router()

router.get('/public', get)
router.post('/public', authUser, validateSchema(organizationBody), post)

module.exports = router
