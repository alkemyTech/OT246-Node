/**
 * @swagger
 * tags:
 *   - name: members
 *     description: Endpoints regarding members
 *
 * components:
 *   schemas:
 *     MemberBody:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Member's name
 *           example: Patrick Stewart
 *         image:
 *           type: string
 *           format: url
 *           description: Member's image
 *           example: "http://example.com"
 *       required:
 *         - name
 *         - image
 *
 *     Member:
 *       allOf:
 *         - $ref: '#/components/schemas/MemberBody'
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Member's unique id
 *           example: 1
 *           readOnly: true
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
 *
 *   responses:
 *     MemberValidationError:
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
 *                     - value: 77
 *                       msg: Name must be string
 *                       param: name
 *                       location: body
 *
 * paths:
 *   /members/:
 *     post:
 *       tags:
 *         - members
 *       security:
 *         - bearerAuth: []
 *       summary: Create a new member
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MemberBody'
 *       responses:
 *         201:
 *           description: Member created successfully
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
 *                         example: Member created successfully
 *                       body:
 *                         type: object
 *                         properties:
 *                           Member:
 *                             $ref: '#/components/schemas/Member'
 *         400:
 *           allOf:
 *             - $ref: '#/components/responses/MemberValidationError'
 *             - description: >-
 *                 The request body validation failed
 *               content:
 *                 application/json:
 *                   schema:
 *                     type: string
 *                     example: >-
 *                       BadRequestError:
 *                       [Error creating member] - [members - POST]:
 *                       Name must be string
 *         401:
 *           allOf:
 *             - $ref: '#/components/responses/InvalidToken'
 *             - description: >-
 *                 Invalid login credentials
 *               content:
 *                 text/html:
 *                   schema:
 *                     type: string
 *                     example: >-
 *                       UnauthorizedError:
 *                        [Error creating members] - [members - POST]:
 *                        Invalid Credentials
 *
 *   /members/:id:
 *     put:
 *       tags:
 *         - members
 *       security:
 *         - bearerAuth: []
 *       summary: Edits existing member
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MemberBody'
 *       responses:
 *         200:
 *           description: Member updated successfully
 *           content:
 *             application/json:
 *               schema:
 *                 allOf:
 *                   - $ref: '#/components/schemas/SuccessResponse'
 *                   - type: object
 *                     properties:
 *                       message:
 *                         example: Member updated successfully
 *                       body:
 *                         type: object
 *                         properties:
 *                           Member:
 *                             $ref: '#/components/schemas/Member'
 *         400:
 *           allOf:
 *             - $ref: '#/components/responses/MemberValidationError'
 *             - description: >-
 *                 The request body validation failed
 *               content:
 *                 application/json:
 *                   schema:
 *                     type: string
 *                     example: >-
 *                       BadRequestError:
 *                       [Error creating member] - [members - PUT]:
 *                       Name must be string
 *         401:
 *           allOf:
 *             - $ref: '#/components/responses/InvalidToken'
 *             - description: >-
 *                 Invalid login credentials
 *               content:
 *                 text/html:
 *                   schema:
 *                     type: string
 *                     example: >-
 *                       UnauthorizedError:
 *                        [Error updating members] - [members - PUT]:
 *                        Invalid Credentials
 *         404:
 *           description: '[Error updating member] - [members/9583698 - PUT]: Member not found'
 *
 * @swagger
 * paths:
 *  /members/?page={page}:
 *   get:
 *    summary: Return all members Paginated
 *    tags:
 *      - members
 *    parameters:
 *      - in: query
 *        name: page
 *        schema:
 *          type: integer
 *        required: false
 *        description: number page
 *    responses:
 *      200:
 *        description: all members
 *        content:
 *          application/json:
 *               schema:
 *                 allOf:
 *                   - $ref: '#/components/schemas/SuccessResponse'
 *                   - type: object
 *                     properties:
 *                       message:
 *                         example: members retrieved successfully
 *                       body:
 *                         properties:
 *                           urls:
 *                            type: object
 *                            properties:
 *                              prevUrl:
 *                                 type: string
 *                                 example: http://localhost:3001/members/?page=0
 *                              nextUrl:
 *                                 type: string
 *                                 example: http://localhost:3001/members/?page=2
 *                           members:
 *                             type: array
 *                             items:
 *                                 $ref: '#/components/schemas/Member'
 *      403:
 *        allOf:
 *          - $ref: '#/components/responses/MemberValidationError'
 *          - description: >-
 *              This endpoint is for admins only
 *            content:
 *              text/html:
 *               schema:
 *                 type: string
 *                 example: >-
 *                   UnauthorizedError:
 *                    [Error retrieving members] - [members - GET]:
 *                    Invalid Credentials
 *
 * @swagger
 *   /members/:id:
 *     delete:
 *       tags:
 *         - members
 *       security:
 *         - bearerAuth: []
 *       summary: Deletes a member
 *       responses:
 *         200:
 *           description: Member successfully deleted
 *           content:
 *             application/json:
 *               schema:
 *                 allOf:
 *                   - $ref: '#/components/schemas/SuccessResponse'
 *                   - type: object
 *                     properties:
 *                       message:
 *                         example: Member successfully deleted
 *                       body:
 *                         $ref: '#/components/schemas/Member'
 *         401:
 *           allOf:
 *             - $ref: '#/components/responses/InvalidToken'
 *             - description: >-
 *                 Invalid login credentials
 *               content:
 *                 text/html:
 *                   schema:
 *                     type: string
 *                     example: >-
 *                       UnauthorizedError:
 *                        [Error deleting members] - [members - DELETE]:
 *                        Invalid Credentials
 *         404:
 *           description: '[Error deleting member] - [members/8912 - DELETE ] - Member not found'
 *
 */

const router = require('express').Router()
const {
  post, put, destroy, get,
} = require('../controllers/members')
const { validateSchema } = require('../middlewares/validations')
const { memberBody } = require('../schemas/members')
const { authUser } = require('../middlewares/authUser')
const { authUserAdmin } = require('../middlewares/authUserAdmin')

router.post('/', authUser, validateSchema(memberBody), post)
router.put('/:id', authUser, put)
router.delete('/:id', authUser, destroy)
router.get('/', authUserAdmin, get)

module.exports = router
