const { Router } = require('express')
const { get, put } = require('../controllers/comments')
const { authUserAdmin } = require('../middlewares/authUserAdmin')
const { authUser } = require('../middlewares/authUser')

const router = Router()

// router.get('/', authUserAdmin, get)
router.put('/:id', authUser, put)

module.exports = router
