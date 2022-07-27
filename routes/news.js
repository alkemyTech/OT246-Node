const router = require('express').Router()
const { getById, destroy } = require('../controllers/news')
const { authUser } = require('../middlewares/authUser')

router.get('/:id', authUser, getById)
router.delete('/:id', authUser, destroy)

module.exports = router
