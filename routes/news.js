const router = require('express').Router()
const { getById, post, put } = require('../controllers/news')
const { authUser } = require('../middlewares/authUser')
const { validateSchema } = require('../middlewares/validations')
const { newBodyPost, newBodyPut } = require('../schemas/news')

router.get('/:id', authUser, getById)
router.post('/', authUser, validateSchema(newBodyPost), post)
router.put(':/id', authUser, validateSchema(newBodyPut), put)

module.exports = router
