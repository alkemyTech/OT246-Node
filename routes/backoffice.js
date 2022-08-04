const { Router } = require('express')
const { getContacts } = require('../controllers/backoffice')
const { authUserAdmin } = require('../middlewares/authUserAdmin')

const router = Router()

router.get('/contacts', authUserAdmin, getContacts)

module.exports = router
