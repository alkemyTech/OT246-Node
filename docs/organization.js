/**
 * @swagger
 * components:
 *  schemas:
 *    Organization:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: the organizaton name
 *        image:
 *          type: string
 *          description: image for organization
 *        address:
 *          type:string
 *          description: the address organization
 *        phone:
 *          type:string
 *          description: the phone  organization
 *        email:
 *          type:string
 *          description: the email organization
 *        welcomeText:
 *          type:string
 *          description: the welcome organization
 *        aboutUsText:
 *          type:string
 *          description: the  about us organization
 *        facebook:
 *          type:string
 *          description: the social network facebook organization
 *        linkedin:
 *          type:string
 *          description: the social network linkedin organization
 *        instagram:
 *          type:string
 *          description: the social network instagram organization
 *      required:
 *        - name
 *        - email
 *      example:
 *        name:  organization name
 *        image: https://www.image.com
 *        address: organization Nº 345
 *        phone:  261345678
 *        email:  oragnization@gmail.com
 *        welcomeText:  Welcome description
 *        aboutUsText:  about us description
 *        facebook:  facebook_organization
 *        linkedin:  linkedin_organization
 *        instagram:  instagram_organization
 */

/* GET Organizations */
/**
 * @swagger
 * /organizations:
 *  get:
 *    summary: return all Organizations
 *    tags: [Organization]
 *    responses:
 *      200:
 *        description: all Organizations
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Organization'
 *      404:
 *        description: there aren't Organizations to show
 */

/* POST Organization. */
/**
 * @swagger
 * /organizations:
 *  post:
 *    summary: create a new Organization (need JWT)
 *    tags: [Organization]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Organization'
 *    responses:
 *      200:
 *        description: Organization created
 *      500:
 *        description: internal server error occurred
 */
