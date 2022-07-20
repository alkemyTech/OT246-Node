const { Router } = require('express')
const { get } = require('../controllers/organizations')

const router = Router()

router.get('/', get)

module.exports = router
