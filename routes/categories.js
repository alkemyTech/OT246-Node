const { Router } = require('express')
const { get } = require('../controllers/categories')

const router = Router()

router.get('/public', get)

module.exports = router