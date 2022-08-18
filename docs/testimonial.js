/**
 * @swagger
 * components:
 *  schemas:
 *    Testimonials:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: the testimonial name
 *        image:
 *          type: string
 *          description: image for testimonial
 *        content:
 *          type: string
 *          description: content for testimonial *
 *      required:
 *        - name
 *        - content
 *      example:
 *        name: testimonial name
 *        image: https://www.imagenes.com
 *        content: testimonial content
 */

/* PUT testimonial by ID */
/**
 * @swagger
 * /testimonials/{id}:
 *  put:
 *    summary: update a testimonial  (need JWT)
 *    tags: [Testimonials]
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
 *            $ref: '#/components/schemas/Testimonials'
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      200:
 *        description: Testimonial updated successfully
 *      401:
 *        description: Invalid login credentials
 *      403:
 *        description: This endpoint is for admins only
 *      404:
 *        description: there isn't registered testimonial
 */

/*
/* POST testimonial. */
/**
 * @swagger
 * /testimonials:
 *  post:
 *    summary: create a new testimonial (need JWT)
 *    tags: [Testimonials]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Testimonials'
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      201:
 *        description: Testimonial created successfully
 *      401:
 *        description: Invalid login credentials
 *      403:
 *        description: This endpoint is for admins only
 *      500:
 *        description: An internal server error occurred
 */

/* Destroy testimonial by ID */
/**
 * @swagger
 * /testimonials/{id}:
 *  delete:
 *    summary: destroy one testimonial (need JWT)
 *    tags: [Testimonials]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: the testimonial ID
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      200:
 *        description: Testimonial successfully deleted
 *      401:
 *        description: Invalid login credentials
 *      403:
 *        description: This endpoint is for admins only
 *      404:
 *        description: not found testimonial
 */

/* GET testimonial */
/**
 * @swagger
 * /testimonials:
 *  get:
 *    summary: return all testimonials
 *    tags: [Testimonial]
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      200:
 *        description: all testimonials
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Testimonials'
 *      404:
 *        description: there aren't testimonials to show
 *      401:
 *        description: Invalid  credentials
 *      403:
 *        description: This endpoint is for admins only
 */
