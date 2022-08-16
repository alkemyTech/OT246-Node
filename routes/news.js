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
 *           format: url
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
 *       allOf:
 *         - $ref: '#/components/schemas/NewBodyPost'
 *       properties:
 *         name:
 *           type: string
 *           description: News name's
 *           minLength: 1
 *           example: El mato a un policia motorizado
 *         content:
 *           type: string
 *           format: url
 *           description: News content
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
 *         type:
 *           type: string
 *           example: news
 *           readOnly: true
 */

/* POST news */
/**
 * @swagger
 *  paths:
 *   /news/:
 *    post:
 *       tags: [news]
 *       summary: create a new (need JWT)
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
 *                 The request body validation failed or the categoryid is invalid
 *               content:
 *                 text/html:
 *                   schema:
 *                     type: string
 *                     example: >-
 *                       BadRequestError:
 *                       [Error creating new] - [news - POST]:
 *                       Category not found
 *
 */

/* GET news by id */
/**
 * @swagger
 *  paths:
 *   /news/{id}:
 *    get:
 *       tags: [news]
 *       summary: Retrieve News by id
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
 *                 The request body validation failed or the categoryid is invalid
 *               content:
 *                 text/html:
 *                   schema:
 *                     type: string
 *                     example: >-
 *                       BadRequestError:
 *                       [Error creating new] - [news - POST]:
 *                       Category not found
 *
 */

/* GET news */
/**
 * @swagger
 * /news:
 *  get:
 *    summary: return all news
 *    tags: [Testimonial]
 *    responses:
 *      200:
 *        description: all news
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/News'
 *      404:
 *        description: there aren't news to show
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
