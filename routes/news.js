/**
 * @swagger
 *  components:
 *   schemas:
 *     NewsBodyPost:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: News name's
 *           minLength: 1
 *           example: El mato a un policia motorizado
 *         content:
 *           type: string
 *           description: News content
 *           example: "Esta canción la escuchaba siempre con mi hijo,
 *                     hoy estuviera cumpliendo 16 años, lástima que
 *                     se nos adelantó pero se que algun dia nos volveremos
 *                     a encontrar para escuchar juntos de nuevo"
 *         image:
 *           type: string
 *           format: url
 *           description: News image
 *           minLength: 1
 *           example: https://cohorte-julio-8972766c.s3.us-east-1.amazonaws.com/slide1.jpg
 *         categoryId:
 *           type: integer
 *           description: Category's unique id
 *           example: 1
 *           readOnly: true
 *       required:
 *         - name
 *         - content
 *         - image
 *         - categoryId
 *     News:
 *       properties:
 *         name:
 *           type: string
 *           description: News name's
 *           minLength: 1
 *           example: El mato a un policia motorizado
 *         content:
 *           type: string
 *           description: News content
 *           example: "Esta canción la escuchaba siempre con mi hijo,
 *                     hoy estuviera cumpliendo 16 años, lástima que
 *                     se nos adelantó pero se que algun dia nos volveremos
 *                     a encontrar para escuchar juntos de nuevo"
 *         image:
 *           type: string
 *           format: url
 *           description: News image
 *           minLength: 1
 *           example: https://cohorte-julio-8972766c.s3.us-east-1.amazonaws.com/slide1.jpg
  *         type:
 *           type: string
 *           example: news
 *           readOnly: true
 *         categoryId:
 *           type: integer
 *           description: Category's unique id
 *           example: 1
 *           readOnly: true
 *     Comment:
 *       properties:
 *         newsId:
 *           type: integer
 *           description: New's unique id
 *           example: 1
 *           readOnly: true
 *         body:
 *           type: string
 *           example: " Típicos años de adolescencia, las juntadas en grupos de amigos,
 *                    cerveza, lugares alejados,... quién pudiera volver."
 *           description: News content
 *       required:
 *         - body
 *
 *
 *   responses:
 *     CreateNewsValidationError:
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
 *                     - value: notAnUrl
 *                       msg: Must be an url
 *                       param: email
 *                       location: body
 */

/* POST news */
/**
 * @swagger
 *  paths:
 *   /news/:
 *    post:
 *       tags: [news]
 *       summary: Create a New (need JWT)
 *       security:
 *         - bearerAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NewsBodyPost'
 *       responses:
 *         201:
 *           description: Create a News
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
 *                         example: New created successfully
 *                       body:
 *                         type: object
 *                         properties:
 *                           news:
 *                             $ref: '#/components/schemas/News'
 *         404:
 *           allOf:
 *             - description: >-
 *                  Category not found
 *               content:
 *                 text/html:
 *                   schema:
 *                     type: string
 *                     example: >-
 *                       NotFoundError:
 *                       [Error creating new] - [news - POST]:
 *                       Category not found
 *         400:
 *           description: The request body validation failed
 *           content:
 *             application/json:
 *               schema:
 *                 allOf:
 *                   - $ref: '#/components/schemas/ValidationError'
 *                   - type: object
 *                     properties:
 *                       errors:
 *                          example:
 *                            - value: ""
 *                              msg: Must not be empty'
 *                              param: name
 *                              location: body
  *                            - value: ""
 *                              msg: Must not be empty'
 *                              param: content
 *                              location: body
  *                            - value: ""
 *                              msg: Must not be empty'
 *                              param: image
 *                              location: body
  *                            - value: notAnUrl
 *                              msg: Must be a valid URL'
 *                              param: image
 *                              location: body
 *
 */

/* GET news */
/**
 * @swagger
 * paths:
 *  /news/?page={page}:
 *   get:
 *    summary: Return all news Paginated
 *    tags: [news]
 *    parameters:
 *      - in: query
 *        name: page
 *        schema:
 *          type: integer
 *        required: false
 *        description: number page
 *    responses:
 *      200:
 *        description: all news
 *        content:
 *          application/json:
 *               schema:
 *                 allOf:
 *                   - $ref: '#/components/schemas/SuccessResponse'
 *                   - type: object
 *                     properties:
 *                       message:
 *                         example: News retrieved successfully
 *                       body:
 *                         properties:
 *                           urls:
 *                            type: object
 *                            properties:
 *                              prevUrl:
 *                                 type: string
 *                                 example: http://localhost:3001/news/?page=0
 *                              nextUrl:
 *                                 type: string
 *                                 example: http://localhost:3001/news/?page=2
 *                           news:
 *                             type: array
 *                             items:
 *                                 $ref: '#/components/schemas/News'
 */

/* GET news by id */
/**
 * @swagger
 *  paths:
 *   /news/{id}:
 *    get:
 *       tags: [news]
 *       summary: Retrieve News by id (need JWT)
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: the news ID
 *       responses:
 *         201:
 *           description: Create a News
 *           content:
 *             application/json:
 *               schema:
 *                 allOf:
 *                   - $ref: '#/components/schemas/SuccessResponse'
 *                   - type: object
 *                     properties:
 *                       code:
 *                         example: 202
 *                       message:
 *                         example: New created successfully
 *                       body:
 *                         type: object
 *                         properties:
 *                           news:
 *                             $ref: '#/components/schemas/News'
 *         404:
 *           description: Not found News
 *           content:
 *             text/html:
 *               schema:
 *                 type: string
 *                 example: >-
 *                   NotFoundError:
 *                   [Error retrieving news] - [news/${id} - GET]: Not found News
 *
 */

/* GET comments by news id */
/**
 * @swagger
 * paths:
 *  /news/{id}/comments/:
 *   get:
 *    tags: [news]
 *    security:
 *      - bearerAuth: []
 *    summary: Get all Comments for a specific News (need JWT)
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: the news id
 *    responses:
 *      200:
 *        description: Get all comments from one News
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Comment'
 *      404:
 *        description: Not found News
 *        content:
 *          text/html:
 *            schema:
 *              type: string
 *              example: >-
 *                NotFoundError:
 *                [Error updating news] - [news/${id} - PUT]: Not found News
 *
 */

/* Destroy news by ID */
/**
 * @swagger
 * /news/{id}:
 *  delete:
 *    summary: Delete one News (need JWT)
 *    security:
 *      - bearerAuth: []
 *    tags: [news]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: the news ID
 *    responses:
 *      200:
 *        description: News deleted
 *        content:
 *          application/json:
 *            schema:
 *                 allOf:
 *                   - $ref: '#/components/schemas/SuccessResponse'
 *                   - type: object
 *                     properties:
 *                       message:
 *                         example: News successfully deleted
 *                       body:
 *                         $ref: '#/components/schemas/News'
 *      404:
 *        description: Not found News
 *        content:
 *          text/html:
 *            schema:
 *              type: string
 *              example: >-
 *                NotFoundError:
 *                [Error deleting news] - [news/${id} - DELETE ]: Not found News
 */

/* Update news by ID */
/**
 * @swagger
 * /news/{id}:
 *  put:
 *    summary: Update one News (need JWT)
 *    security:
 *      - bearerAuth: []
 *    tags: [news]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: the news ID
 *    responses:
 *      200:
 *        description: news deleted
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/News'
 *      404:
 *        description: Not found News
 *        content:
 *          text/html:
 *            schema:
 *              type: string
 *              example: >-
 *                UnauthorizedError:
 *                [Error deleting news] - [news/${id} - DELETE ]: Not found News
 */
const router = require('express').Router()
const {
  getById,
  get,
  post,
  put,
  destroy,
} = require('../controllers/news')
const { getCommentsByNewsId } = require('../controllers/comments')
const { authUser } = require('../middlewares/authUser')
const { validateSchema } = require('../middlewares/validations')
const { newBodyPost, newBodyPut } = require('../schemas/news')
const { authUserAdmin } = require('../middlewares/authUserAdmin')

router.get('/:id', authUserAdmin, getById)
router.get('/', get)
router.post('/', authUserAdmin, validateSchema(newBodyPost), post)
router.put('/:id', authUserAdmin, validateSchema(newBodyPut), put)
router.delete('/:id', authUserAdmin, destroy)
router.get('/:id/comments', authUser, getCommentsByNewsId)

module.exports = router
