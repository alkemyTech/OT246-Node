/**
 * @swagger
 * components:
 *  schemas:
 *    Activities:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: the activity name
 *        image:
 *          type: string
 *          description: image for activity
 *        content:
 *          type: string
 *          description: content for activity *
 *      required:
 *        - name
 *      example:
 *        name: activity name
 *        image: https://www.imagenes.com
 *        content: activity content
 */

/*
/* POST activity */
/**
 * @swagger
 * /activities:
 *  post:
 *    summary: create a new activity (need JWT)
 *    tags: [Activities]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Activities'
 *    responses:
 *      200:
 *        description: activity created
 *      500:
 *        description: An internal server error occurred
 */

/* PUT testimonial by ID */
/**
 * @swagger
 * /Activities/{id}:
 *  put:
 *    summary: update a activity  (need JWT)
 *    tags: [Activities]
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
 *            $ref: '#/components/schemas/Activities'
 *    responses:
 *      200:
 *        description: activity updated
 *      404:
 *        description: there isn't registered activity
 */
