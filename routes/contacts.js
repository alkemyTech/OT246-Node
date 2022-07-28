const { Router } = require('express')
const { get } = require('../controllers/contacts')
const { authUser } = require('../middlewares/authUser')
const { isUserAdmin } = require('../middlewares/adminVerification')

const router = Router()

router.get('/', authUser, isUserAdmin, get)

module.exports = router
