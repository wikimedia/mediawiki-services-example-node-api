'use strict';

const sUtil = require('../lib/util');

/**
 * The main router object
 */
const router = sUtil.router();

/**
 * GET /
 * Gets a hello world string
 *
 * @openapi
 * /hello:
 *   get:
 *     summary: Hello World
 *     description: Gets string hello world
 *     tags:
 *       - Example API
 *     responses:
 *       200:
 *          description: Success
 *          content:
 *            application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                  name:
 *                    type: string
 *                  version:
 *                    type: string
 *                  description:
 *                    type: string
 *                  home:
 *                    type: string
 *       404:
 *         description: Not Found
 *         content:
 *           $ref: 'schema/definitions/Problem.yaml'
 *       400:
 *         description: Bad Request
 *         content:
 *           $ref: 'schema/definitions/Problem.yaml'
 *       default:
 *         description: Error
 *         content:
 *           $ref: 'schema/definitions/Problem.yaml'
 *
 */
router.get('/', (req, res) => {
    // simple sync return
        res.json({
            message: 'Hello world'
        });

});

module.exports = (appObj) => {

    return {
        path: '/hello',
        skip_domain: true,
        router
    };

};
