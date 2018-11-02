'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect({
        id: 123456,
        name: '宗羽',
        address: '蚂蚁 C 空间',
        salary: 100000000,
      })
      .expect(200);
  });
});
