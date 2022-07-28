const router = require('express').Router()
const { getById, destroy } = require('../controllers/slides')
const { authUser } = require('../middlewares/authUser')
const { isUserAdmin } = require('../middlewares/adminVerification')

router.get('/:id', getById)
router.delete('/:id', authUser, isUserAdmin, destroy)

module.exports = router
