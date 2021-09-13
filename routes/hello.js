'use strict';

const sUtil = require('../lib/util');

/**
 * The main router object
 */
const router = sUtil.router();

/**
 * GET /
 * Gets a hello world string
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
