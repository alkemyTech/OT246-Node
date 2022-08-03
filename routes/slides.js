const router = require('express').Router()
const {
  getById,
  getAll,
  put,
  destroy,
  post,
} = require('../controllers/slides')
const { isUserAdmin } = require('../middlewares/adminVerification')

router.get('/:id', getById)
router.get('/', getAll)
router.put('/:id', isUserAdmin, put)
router.delete('/:id', isUserAdmin, destroy)
router.post('/', isUserAdmin, post)

module.exports = router
