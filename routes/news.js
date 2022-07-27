const router = require('express').Router()
const { getById, post } = require('../controllers/news')
const { authUser } = require('../middlewares/authUser')
const { validateSchema } = require('../middlewares/validations')
const { newBody } = require('../schemas/news')

router.get('/:id', authUser, getById)
router.post('/', validateSchema(newBody), post)

module.exports = router
