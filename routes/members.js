const router = require('express').Router()
const { post, put } = require('../controllers/members')
const { validateSchema } = require('../middlewares/validations')
const { memberBody } = require('../schemas/members')
const { authUser } = require('../middlewares/authUser')
const { isUserAdmin } = require('../middlewares/adminVerification')

router.post('/', authUser, isUserAdmin, validateSchema(memberBody), post)
router.put('/:id', authUser, put)

module.exports = router
