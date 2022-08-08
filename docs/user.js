/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *       firstName:
 *          type: string
 *          description: the user last  name
 *       lastName:
 *          type: string
 *          description: the category name
 *       email:
 *          type: string
 *          description: the user email
 *       password:
 *          type: string
 *          description: the user password
 *       photo:
 *          type: string
 *          description: the user photo
 *       roleId:
 *          type: integer
 *          description: the user rol
 *      required:
 *        - firtsName
 *        - email
 *        - password
 *        - rol
 *      example:
 *        firstName:  Robert
 *        lastName:   Clean
 *        email: robert@gmail.com
 *        password: 1234
 *        photo: user photo
 *        roleId: 2
 */

/* GET users */
/**
 * @swagger
 * /users:
 *  get:
 *    summary: return all users
 *    tags: [User]
 *    responses:
 *      200:
 *        description: all users
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 *      404:
 *        description: there aren't users to show
 */

/* GET user by ID */
/**
 * @swagger
 * /users/{id}:
 *  get:
 *    summary: return one user (need  JWT)
 *    tags: [User]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: the user ID
 *    responses:
 *      200:
 *        description: one user
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: there isn't registered user
 */

/* POST user. */
/**
 * @swagger
 * /users:
 *  post:
 *    summary: create a new user (need JWT)
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: user created
 *      500:
 *        description: internal server error occurred
 */

/* PUT users by ID */
/**
 * @swagger
 * /users/{id}:
 *  put:
 *    summary: update a user  (need JWT)
 *    tags: [User]
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
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: user updated
 *      404:
 *        description: there isn't registered user
 */

/* Destroy user by ID */
/**
 * @swagger
 * /users/{id}:
 *  delete:
 *    summary: Destroy one user (need JWT)
 *    tags: [User]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: the user ID
 *    responses:
 *      200:
 *        description: destroy user
 *      404:
 *        description: not found user
 */
