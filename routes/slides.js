const router = require('express').Router()
const { getById, put } = require('../controllers/slides')
const { authUser } = require('../middlewares/authUser')
const isUserAdmin = require('../middlewares/adminVerification')

router.get('/:id', getById)

router.put('/:id', authUser, isUserAdmin, put)

module.exports = router
