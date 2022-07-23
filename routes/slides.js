const router = require('express').Router()
const { getById } = require('../controllers/slides')

router.get('/:id', getById)

module.exports = router
