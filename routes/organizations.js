const { Router } = require('express')
const { get, post } = require('../controllers/organizations')
const { validateSchema } = require('../middlewares/validations')
const { organizationBody } = require('../schemas/organization')
const { authUserAdmin } = require('../middlewares/authUserAdmin')

const router = Router()

router.get('/public', get)
router.post('/public', authUserAdmin, validateSchema(organizationBody), post)

module.exports = router
