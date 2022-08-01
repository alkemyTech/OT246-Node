const router = require('express').Router()
const { put } = require('../controllers/testimonials')
const { authUser } = require('../middlewares/authUser')
const { isUserAdmin } = require('../middlewares/adminVerification')

router.put('/:id', authUser, isUserAdmin, put)

module.exports = router
