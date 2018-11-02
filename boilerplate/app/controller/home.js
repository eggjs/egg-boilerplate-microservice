'use strict';

const Controller = require('egg-cloud').Controller;

class HomeController extends Controller {
  async index() {
    const ctx = this.ctx;
    ctx.body = await ctx.proxy.userService.echoUser({
      id: 123456,
      name: '宗羽',
      address: '蚂蚁 C 空间',
      salary: 100000000,
    });
  }
}

module.exports = HomeController;
