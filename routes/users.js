const express = require('express')
const { get, destroy, put } = require('../controllers/users')
const { isUserAdmin } = require('../middlewares/authUserAdmin')

const router = express.Router()

router.get('/', isUserAdmin, get)
router.delete('/:id', destroy)
router.put('/:id', put)

module.exports = router
