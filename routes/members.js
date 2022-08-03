const router = require('express').Router()
const { post } = require('../controllers/members')
const { validateSchema } = require('../middlewares/validations')
const { memberBody } = require('../schemas/members')
const { isUserAdmin } = require('../middlewares/authUserAdmin')

router.post('/', isUserAdmin, validateSchema(memberBody), post)

module.exports = router
