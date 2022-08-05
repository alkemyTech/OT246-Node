const { Router } = require('express')
const { get, destroy } = require('../controllers/comments')
const { authUserAdmin } = require('../middlewares/authUserAdmin')
const { authUser } = require('../middlewares/authUser')

const router = Router()

router.get('/', authUserAdmin, get)
router.delete('/:id', authUser, destroy)

module.exports = router
