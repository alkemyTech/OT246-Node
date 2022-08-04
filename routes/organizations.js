const router = require('express').Router()
const { get, post } = require('../controllers/organizations')
const { validateSchema } = require('../middlewares/validations')
const { organizationBody } = require('../schemas/organization')
const { authUserAdmin } = require('../middlewares/authUserAdmin')

router.get('/public', get)
router.post('/public', authUserAdmin, validateSchema(organizationBody), post)

module.exports = router
