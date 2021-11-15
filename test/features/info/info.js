'use strict';

const preq   = require('preq');
const assert = require('../../utils/assert.js');
const Server = require('../../utils/server.js');

describe('service information', function () {

    this.timeout(20000);

    let infoUri = null;

    const server = new Server();

    before(() => {
        return server.start()
        .then(() => {
            infoUri = `${server.config.uri}_info/`;
        });
    });

    after(() => server.stop());

    it('should get the service info', () => {
        return preq.get({
            uri: infoUri
        }).then((res) => {
            // check the status
            assert.status(res, 200);
            // check the returned Content-Type header
            assert.contentType(res, 'application/json');
            // inspect the body
            assert.notDeepEqual(res.body, undefined, 'No body returned!');
            assert.notDeepEqual(res.body.name, undefined, 'No name field returned!');
            assert.notDeepEqual(res.body.version, undefined, 'No version field returned!');
            assert.notDeepEqual(res.body.description, undefined, 'No description field returned!');
            assert.notDeepEqual(res.body.home, undefined, 'No home field returned!');
        });
    });

    it('should fail to get the service info for invalid endpoint', () => {
        return assert.fails(
            preq.get({ uri: `${infoUri}zzz` }),
            (res) => {
                assert.deepEqual(res.status, 404);
            }
        );
    });
});
