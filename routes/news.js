const router = require('express').Router()
const { getById } = require('../controllers/news')
const { authUser } = require('../middlewares/authUser')

router.get('/:id', authUser, getById)

module.exports = router
