const { Router } = require('express')
const { get } = require('../controllers/comments')
const { authUser } = require('../middlewares/authUser')

const router = Router()

router.get('/', authUser, get)

module.exports = router
