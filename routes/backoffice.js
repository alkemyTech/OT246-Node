const { Router } = require('express')
const { getContacts } = require('../controllers/backoffice')
const { isUserAdmin } = require('../middlewares/authUserAdmin')

const router = Router()

router.get('/contacts', isUserAdmin, getContacts)

module.exports = router
