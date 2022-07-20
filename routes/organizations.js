const { Router } = require('express')
const { get } = require('../controllers/organizations')

const router = Router()

router.get('/public', get)

module.exports = router
