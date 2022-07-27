const { Router } = require('express')
const {
  post,
} = require('../controllers/activities')
const { validateSchema } = require('../middlewares/validations')
const { activityBodyPost } = require('../schemas/activities')
const { authUser } = require('../middlewares/authUser')

const router = Router()

router.post('/', authUser, validateSchema(activityBodyPost), post)

module.exports = router
