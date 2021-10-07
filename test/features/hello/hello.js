'use strict';

const preq   = require('preq');
const assert = require('../../utils/assert.js');
const Server = require('../../utils/server.js');

describe('hello world', function () {

    this.timeout(20000);

    let helloUri = null;

    const server = new Server();

    before(() => {
        return server.start()
            .then(() => {
                helloUri = `${server.config.uri}hello/`;
            });
    });

    after(() => server.stop());

    it('should get the message', () => {
        return preq.get({
            uri: helloUri
        }).then((res) => {
            // check the status
            assert.status(res, 200);
            // check the returned Content-Type header
            assert.contentType(res, 'application/json');
            // check that it returns the message in the body
            assert.deepEqual(res.body, { message: 'Hello world' });
        });
    });

    it('should return 404 for invalid endpoint', () => {
        return assert.fails(
            preq.get({ uri: `${helloUri}zzz` }),
            (res) => {
                assert.deepEqual(res.status, 404);
            }
        );
    });
});
