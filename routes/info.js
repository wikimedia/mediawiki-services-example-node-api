'use strict';

const sUtil = require('../lib/util');

/**
 * The main router object
 */
const router = sUtil.router();

/**
 * The main application object reported when this module is require()d
 */
let app;

/**
 * GET /
 *
 * @openapi
 * /info:
 *   get:
 *     summary: API Information
 *     description: Gets build/version information for the API
 *     tags:
 *       - Example API
 *     responses:
 *       200:
 *          description: Success
 *          content:
 *            $ref: 'schema/definitions/Info.yaml'
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
        name: app.info.name,
        version: app.info.version,
        description: app.info.description,
        home: app.info.homepage
    });

});

module.exports = (appObj) => {

    app = appObj;

    return {
        path: '/_info',
        skip_domain: true,
        router
    };

};
