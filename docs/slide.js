/**
 * @swagger
 * components:
 *  schemas:
 *    Slide:
 *      type: object
 *      properties:
 *        imageUrl:
 *          type: string
 *          description: the slide image
 *        text:
 *          type: string
 *          description: description for text slide
 *        order:
 *          type: integer
 *          description: order for slide
 *      required:
 *        - imageUrl
 *        - text
 *        - order
 *      example:
 *        imageUrl:  slide imageUrl
 *        text:  text slide
 *        order:  order for slide
 */

/* GET slides */
/**
 * @swagger
 * /slides:
 *  get:
 *    summary: return all slides
 *    tags: [Slide]
 *    responses:
 *      200:
 *        description: all slides
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Slide'
 *      404:
 *        description: there aren't slides to show
 */

/* GET slide by ID */
/**
 * @swagger
 * /slides/{id}:
 *  get:
 *    summary: return one slides (need  JWT)
 *    tags: [Slide]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: the slide ID
 *    responses:
 *      200:
 *        description: one slide
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Slide'
 *      404:
 *        description: there isn't registered Slide
 */

/* POST slide. */
/**
 * @swagger
 * /slides:
 *  post:
 *    summary: create a new slide (need JWT)
 *    tags: [Slide]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Slide'
 *    responses:
 *      200:
 *        description: slide created
 *      500:
 *        description: internal server error occurred
 */

/* PUT slides by ID */
/**
 * @swagger
 * /slides/{id}:
 *  put:
 *    summary: update a slide  (need JWT)
 *    tags: [Slide]
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
 *            $ref: '#/components/schemas/Slide'
 *    responses:
 *      200:
 *        description: slide updated
 *      404:
 *        description: there isn't registered slide
 */

/* Destroy slide by ID */
/**
 * @swagger
 * /slides/{id}:
 *  delete:
 *    summary: Destroy one slide (need JWT)
 *    tags: [Slide]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: the slide ID
 *    responses:
 *      200:
 *        description: destroy slide
 *      404:
 *        description: not found slides
 */
