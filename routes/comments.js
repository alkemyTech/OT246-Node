const { Router } = require('express')
const { get } = require('../controllers/comments')
const { authUserAdmin } = require('../middlewares/authUserAdmin')

const router = Router()

router.get('/', authUserAdmin, get)

module.exports = router
