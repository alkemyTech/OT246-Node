const router = require('express').Router()
const { getById, getAll } = require('../controllers/slides')

router.get('/:id', getById)
router.get('/', getAll)

module.exports = router
