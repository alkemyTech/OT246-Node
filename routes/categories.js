const { Router } = require('express')
const { get, getById, post } = require('../controllers/categories')
const { validateSchema } = require('../middlewares/validations')
const { categoryBody } = require('../schemas/categories')
const { authUser } = require('../middlewares/authUser')

const router = Router()

router.get('/public', get)
router.get('/:id', getById)
router.post('/', authUser, validateSchema(categoryBody), post)

module.exports = router
