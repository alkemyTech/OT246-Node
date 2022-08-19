const express = require('express')
const { get, destroy, put } = require('../controllers/users')
const { authUserAdmin } = require('../middlewares/authUserAdmin')
const { ownership } = require('../middlewares/ownership')

const router = express.Router()

router.get('/', authUserAdmin, get)
router.delete('/:id', ownership, destroy)
router.put('/:id', ownership, put)

module.exports = router
