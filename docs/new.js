/**
 * @swagger
 * components:
 *  schemas:
 *    New:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: the new name
 *        content:
 *          type: string
 *          description: description for new
 *        image:
 *          type: string
 *          description: image for new
 *        type:
 *          type: string
 *          description: description for type
 *      required:
 *        - name
 *        - type
 *      example:
 *        name:  new name
 *        content: description for content
 *        image: https://www.image.com
 *        type:  description for type
 */

/* GET New by ID */
/**
 * @swagger
 * /New/{id}:
 *  get:
 *    summary: return one new (need  JWT)
 *    tags: [New]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: the new ID
 *    responses:
 *      200:
 *        description: one new
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/New'
 *      404:
 *        description: there isn't registered new
 */

/* POST new. */
/**
 * @swagger
 * /News:
 *  post:
 *    summary: create a new  (need JWT)
 *    tags: [New]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Category'
 *    responses:
 *      200:
 *        description: new created
 *      500:
 *        description: internal server error occurred
 */

/* PUT new by ID */
/**
 * @swagger
 * /news/{id}:
 *  put:
 *    summary: update a new  (need JWT)
 *    tags: [New]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/new'
 *    responses:
 *      200:
 *        description: new updated
 *      404:
 *        description: there isn't registered new
 */

/* Destroy new by ID */
/**
 * @swagger
 * /news/{id}:
 *  delete:
 *    summary: Destroy one new (need JWT)
 *    tags: [New]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: the new ID
 *    responses:
 *      200:
 *        description: destroy new
 *      404:
 *        description: not found new
 */

/* GET news */
/**
 * @swagger
 * /news:
 *  get:
 *    summary: return all news
 *    tags: [New]
 *    responses:
 *      200:
 *        description: all news
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/New'
 *      404:
 *        description: there aren't news to show
 */
