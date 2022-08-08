/**
 * @swagger
 * components:
 *  schemas:
 *    Backoffice:
 *      type: object
 *      properties:
 *        title:
 *          type: string
 *          description: the title name
 *        contact:
 *          type: string
 *          description: description for contact
 *       required:
 *        - contacts
 *      example:
 *        title:  title name
 *        contact:  contact description
 */

/* GET backoffice */
/**
 * @swagger
 * /backoffice:
 *  get:
 *    summary: return all Backoffice
 *    tags: [Backoffice]
 *    responses:
 *      200:
 *        description: all Backoffice
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Backoffice'
 *      404:
 *        description: there aren't Backoffice to show
 */
