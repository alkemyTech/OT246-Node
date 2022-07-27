const router = require('express').Router()
const { getById, post, destroy } = require('../controllers/news')
const { authUser } = require('../middlewares/authUser')
const { validateSchema } = require('../middlewares/validations')
const { newBody } = require('../schemas/news')

router.get('/:id', authUser, getById)
router.post('/', authUser, validateSchema(newBody), post)
router.delete('/:id', authUser, destroy)

module.exports = router
