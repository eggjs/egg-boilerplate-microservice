'use strict';

const Controller = require('sofa-node').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, sofa-node';
  }
}

module.exports = HomeController;
