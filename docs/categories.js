/**
 * @swagger
 * components:
 *  schemas:
 *    Categories:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: category's name
 *        image:
 *          type: string
 *          description: category's image
 *        description:
 *          type: string
 *          description: category's description
 *      required:
 *        - name
 *      example:
 *        name: category1
 *        image: https://www.photos.com/category1.png
 *        content: some text about category1
 */

/* GET category */
/**
 * @swagger
 * /categories:
 *  get:
 *    summary: return all categories
 *    tags: [Category]
 *    responses:
 *      200:
 *        description: Categories retrieved successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Categories'
 *      404:
 *        description: there aren't categories to show
 */

/* GET category by ID */
/**
 * @swagger
 * /categories/{id}:
 *  get:
 *    summary: return one category
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
 *        description: Category retrieved successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Categories'
 *      404:
 *        description: there isn't category to show
 */

/* POST category. */
/**
 * @swagger
 * /categories:
 *  post:
 *    summary: create a new category
 *    tags: [Category]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Categories'
 *    responses:
 *      201:
 *        description: Category created successfully
 *      500:
 *        description: An internal server error occurred
 */

/* PUT category by ID */
/**
 * @swagger
 * /categories/{id}:
 *  put:
 *    summary: update a category
 *    tags: [Category]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: the category ID
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Categories'
 *    responses:
 *      200:
 *        description: Category updated successfully
 *      404:
 *        description: there isn't registered category
 */

/* Destroy category by ID */
/**
 * @swagger
 * /categories/{id}:
 *  delete:
 *    summary: destroy one category
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
 *        description: Category successfully deleted
 *      404:
 *        description: not found category
 */
