/**
 * @swagger
 * components:
 *  schemas:
 *    Category:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: the category name
 *        description:
 *          type: string
 *          description: description for category
 *        image:
 *          type: string
 *          description: image for category
 *      required:
 *        - name
 *      example:
 *        name:  category name
 *        image: https://www.image.com
 *        description:  category description
 */

/* GET categories */
/**
 * @swagger
 * /categories:
 *  get:
 *    summary: return all categories
 *    tags: [Category]
 *    responses:
 *      200:
 *        description: all categories
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Category'
 *      404:
 *        description: there aren't categories to show
 */

/* GET category by ID */
/**
 * @swagger
 * /categories/{id}:
 *  get:
 *    summary: return one category (need  JWT)
 *    tags: [Category]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: the category ID
 *    responses:
 *      200:
 *        description: one category
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Category'
 *      404:
 *        description: there isn't registered category
 */

/* POST category. */
/**
 * @swagger
 * /categories:
 *  post:
 *    summary: create a new category (need JWT)
 *    tags: [Category]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Category'
 *    responses:
 *      200:
 *        description: category created
 *      500:
 *        description: internal server error occurred
 */

/* PUT category by ID */
/**
 * @swagger
 * /categories/{id}:
 *  put:
 *    summary: update a category  (need JWT)
 *    tags: [Category]
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
 *            $ref: '#/components/schemas/Category'
 *    responses:
 *      200:
 *        description: category updated
 *      404:
 *        description: there isn't registered category
 */

/* Delete category by ID */
/**
 * @swagger
 * /categories/{id}:
 *  delete:
 *    summary: Destroy one category (need JWT)
 *    tags: [Category]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: the category ID
 *    responses:
 *      200:
 *        description: destroy category
 *      404:
 *        description: not found category
 */
