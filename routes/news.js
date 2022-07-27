const router = require('express').Router()
const { getById, put } = require('../controllers/news')
const { authUser } = require('../middlewares/authUser')
const { validateSchema } = require('../middlewares/validations')
const { newBodyPut } = require('../schemas/news')

router.get('/:id', authUser, getById)
router.put('/:id', authUser, validateSchema(newBodyPut), put)

module.exports = router
