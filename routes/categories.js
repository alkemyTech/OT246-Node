const { Router } = require('express')
const { get, getById } = require('../controllers/categories')

const router = Router()

router.get('/public', get)
router.get('/:id', getById)

module.exports = router
