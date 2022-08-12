/**
 * @swagger
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
 *   responses:
 *     InvalidToken:
 *       description: The authorization token is invalid or nonexistent
 *       content:
 *         text/html:
 *           schema:
 *             type: string
 *             example: 'UnauthorizedError: Invalid login credentials'
 */

const express = require('express')
const { get } = require('../controllers/index')
const authRouter = require('./auth')
const backofficeRouter = require('./backoffice')
const userRouter = require('./users')
const categoriesRouter = require('./categories')
const newsRouter = require('./news')
const organizationsRouter = require('./organizations')
const slidesRouter = require('./slides')
const activitiesRouter = require('./activities')
const contactsRouter = require('./contacts')
const testimonialsRouter = require('./testimonials')
const membersRouter = require('./members')
const commentsRouter = require('./comments')

const router = express.Router()

// example of a route with index controller get function
router.get('/', get)
router.use('/auth', authRouter)
router.use('/backoffice', backofficeRouter)
router.use('/users', userRouter)
router.use('/categories', categoriesRouter)
router.use('/comments', commentsRouter)
router.use('/contacts', contactsRouter)
router.use('/news', newsRouter)
router.use('/organization', organizationsRouter)
router.use('/slide', slidesRouter)
router.use('/activities', activitiesRouter)
router.use('/contacts', contactsRouter)
router.use('/testimonials', testimonialsRouter)
router.use('/members', membersRouter)
router.use('/comments', commentsRouter)

module.exports = router
