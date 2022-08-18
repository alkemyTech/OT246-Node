const express = require('express')
const { get, destroy, put } = require('../controllers/users')
const { authUserAdmin } = require('../middlewares/authUserAdmin')
const { authUser } = require('../middlewares/authUser')

const router = express.Router()

router.get('/', authUserAdmin, get)
router.delete('/:id', authUser, destroy)
router.put('/:id', authUser, put)

module.exports = router
