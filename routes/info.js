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
 * Gets some basic info about this service
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
