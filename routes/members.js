const router = require('express').Router()
const { post, put, destroy } = require('../controllers/members')
const { validateSchema } = require('../middlewares/validations')
const { memberBody } = require('../schemas/members')
const { authUser } = require('../middlewares/authUser')
const { authUserAdmin } = require('../middlewares/authUserAdmin')

router.post('/', authUserAdmin, validateSchema(memberBody), post)
router.put('/:id', authUser, put)
router.delete('/:id', authUser, destroy)

module.exports = router
