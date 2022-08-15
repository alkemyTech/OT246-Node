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
 *    responses:
 *      200:
 *        description: testimonial updated
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
 *    responses:
 *      200:
 *        description: Testimonial created
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
 *    responses:
 *      200:
 *        description: Testimonial deleted
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
 */
