/**
 * @swagger
 * tags:
 *   - name: auth
 *     description: Endpoints regarding user authentication
 *
 * components:
 *   schemas:
 *     SuccessResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *           default: true
 *         code:
 *           type: integer
 *           default: 200
 *           description: Response status code
 *         message:
 *           type: string
 *           description: Response description
 *         body:
 *           description: Response body
 *
 *     LoginBody:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: User's email
 *           example: juan.perez@company.com
 *         password:
 *           type: string
 *           format: password
 *           description: User's password
 *           writeOnly: true
 *           example: ABCdef123_
 *       required:
 *         - email
 *         - password
 *
 *     User:
 *       allOf:
 *         - $ref: '#/components/schemas/LoginBody'
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: User's unique id
 *           example: 1
 *           readOnly: true
 *         firstName:
 *           type: string
 *           description: User's first name
 *           minLength: 1
 *           example: Juan
 *         lastName:
 *           type: string
 *           description: User's last name
 *           minLength: 1
 *           example: Pérez
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp of record's creation
 *           example: 2022-08-10T14:26:53.546Z
 *           readOnly: true
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp of record's last update
 *           example: 2022-08-10T14:26:53.546Z
 *           readOnly: true
 *       required:
 *         - firstName
 *         - lastName
 */

const { Router } = require('express')
const { register, login, getData } = require('../controllers/users')
const { validateSchema } = require('../middlewares/validations')
const { authUser } = require('../middlewares/authUser')
const { registerBody } = require('../schemas/register')
const { loginBody } = require('../schemas/login')

const router = Router()

router.post('/register', validateSchema(registerBody), register)
router.post('/login', validateSchema(loginBody), login)
router.get('/me', authUser, getData)

module.exports = router
