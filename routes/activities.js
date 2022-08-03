const { Router } = require('express')
const {
  post,
  put,
} = require('../controllers/activities')
const { validateSchema } = require('../middlewares/validations')
const { activityBodyPost, activityBodyPut } = require('../schemas/activities')
const { authUser } = require('../middlewares/authUser')
const { authUserAdmin } = require('../middlewares/authUserAdmin')

const router = Router()

router.post('/', authUser, validateSchema(activityBodyPost), post)
router.put('/:id', authUserAdmin, validateSchema(activityBodyPut), put)

module.exports = router
