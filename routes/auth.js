/**
 * @swagger
 * tags:
 *   - name: auth
 *     description: Endpoints regarding user authentication
 *
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *
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
 *     ValidationError:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           default: Validation Error
 *         statusCode:
 *           type: integer
 *           default: 400
 *         status:
 *           type: string
 *           default: fail
 *         isOperational:
 *           type: boolean
 *           default: true
 *         errors:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               value:
 *                 description: Validated value
 *               msg:
 *                 type: string
 *                 description: Error message
 *               param:
 *                 type: string
 *                 description: Parameter where the error is
 *               location:
 *                 type: string
 *                 default: body
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
 *
 *   responses:
 *     LoginValidationError:
 *       description: The request body validation failed
 *       content:
 *         application/json:
 *           schema:
 *             allOf:
 *             - $ref: '#/components/schemas/ValidationError'
 *             - type: object
 *               properties:
 *                 errors:
 *                   example:
 *                     - value: notAnEmail
 *                       msg: Must be an email
 *                       param: email
 *                       location: body
 *     InvalidToken:
 *       description: The authorization token is invalid or nonexistent
 *       content:
 *         text/html:
 *           schema:
 *             type: string
 *             example: 'UnauthorizedError: Invalid login credentials'
 *
 * paths:
 *   /auth/register:
 *     post:
 *       tags:
 *         - auth
 *       summary: Creates a new account
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       responses:
 *         201:
 *           description: The account was registered successfully
 *           content:
 *             application/json:
 *               schema:
 *                 allOf:
 *                   - $ref: '#/components/schemas/SuccessResponse'
 *                   - type: object
 *                     properties:
 *                       code:
 *                         example: 201
 *                       message:
 *                         example: Account registered successfully
 *                       body:
 *                         type: object
 *                         properties:
 *                           user:
 *                             $ref: '#/components/schemas/User'
 *                           token:
 *                             type: string
 *                             description: User's login token
 *                             example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.\
 *                               eyJlbWFpbCI6Imp1YW4ucGVyZXpAY29tc\
 *                               GFueS5jb20iLCJpYXQiOjE2NTk5Nzg1MDgs\
 *                               ImV4cCI6MTY1OTk4MjEwOH0.\
 *                               0vApbsxQ6vqbumair2kFs58JuMX470XPrQ6nDd7BwO4"
 *         400:
 *           allOf:
 *             - $ref: '#/components/responses/LoginValidationError'
 *             - description: >-
 *                 The request body validation failed or the provided email is already in use
 *               content:
 *                 text/html:
 *                   schema:
 *                     type: string
 *                     example: >-
 *                       BadRequestError:
 *                       [Error registering account] - [auth/register - POST]:
 *                       Email is already in use
 *
 *   /auth/login:
 *     post:
 *       tags:
 *         - auth
 *       summary: Logs in to an existing account
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginBody'
 *       responses:
 *         200:
 *           description: Login was successful
 *           content:
 *             application/json:
 *               schema:
 *                 allOf:
 *                   - $ref: '#/components/schemas/SuccessResponse'
 *                   - type: object
 *                     properties:
 *                       message:
 *                         example: Account login successfully
 *                       body:
 *                         type: object
 *                         properties:
 *                           token:
 *                             type: string
 *                             description: User's login token
 *                             example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.\
 *                               eyJlbWFpbCI6Imp1YW4ucGVyZXpAY29tc\
 *                               GFueS5jb20iLCJpYXQiOjE2NTk5Nzg1MDgs\
 *                               ImV4cCI6MTY1OTk4MjEwOH0.\
 *                               0vApbsxQ6vqbumair2kFs58JuMX470XPrQ6nDd7BwO4"
 *         400:
 *           $ref: '#/components/responses/LoginValidationError'
 *         401:
 *           description: Email or password are incorrect
 *           content:
 *             text/html:
 *               schema:
 *                 type: string
 *                 example: >-
 *                   UnauthorizedError:
 *                   [Error login account] - [auth/login - POST]: Invalid Credentials
 *
 *   /auth/me:
 *     get:
 *       tags:
 *         - auth
 *       summary: Retrieves the current user data
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: The user data was retrieved successfully
 *           content:
 *             application/json:
 *               schema:
 *                 allOf:
 *                   - $ref: '#/components/schemas/SuccessResponse'
 *                   - type: object
 *                     properties:
 *                       message:
 *                         example: User retrieved successfully
 *                       body:
 *                         $ref: '#/components/schemas/User'
 *         401:
 *           $ref: '#/components/responses/InvalidToken'
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
