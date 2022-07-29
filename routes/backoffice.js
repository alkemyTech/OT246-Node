const { Router } = require('express')
const { getContacts } = require('../controllers/backoffice')
const { authUser } = require('../middlewares/authUser')
const { isUserAdmin } = require('../middlewares/adminVerification')

const router = Router()

router.get('/contacts', authUser, isUserAdmin, getContacts)

module.exports = router
