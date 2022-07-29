const router = require('express').Router()
const { getById, getAll, put } = require('../controllers/slides')
const { authUser } = require('../middlewares/authUser')
const { isUserAdmin } = require('../middlewares/adminVerification')

router.get('/:id', getById)
router.get('/', getAll)
router.put('/:id', authUser, isUserAdmin, put)

module.exports = router
