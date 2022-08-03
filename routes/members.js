const router = require('express').Router()
const { post, destroy } = require('../controllers/members')
const { validateSchema } = require('../middlewares/validations')
const { memberBody } = require('../schemas/members')
const { isUserAdmin } = require('../middlewares/authUserAdmin')

router.post('/', isUserAdmin, validateSchema(memberBody), post)
router.delete('/:id', authUser, destroy)

module.exports = router
