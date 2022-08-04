const router = require('express').Router()
const {
  getById,
  getAll,
  put,
  destroy,
  post,
} = require('../controllers/slides')
const { authUserAdmin } = require('../middlewares/authUserAdmin')

router.get('/:id', authUserAdmin, getById)
router.get('/', authUserAdmin, getAll)
router.put('/:id', authUserAdmin, put)
router.delete('/:id', authUserAdmin, destroy)
router.post('/', authUserAdmin, post)

module.exports = router
