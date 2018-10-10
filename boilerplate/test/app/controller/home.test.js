'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, sofa-node')
      .expect(200);
  });
});
