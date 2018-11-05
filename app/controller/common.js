'use strict';

const Controller = require('egg').Controller;

class CommonController extends Controller {
  async main() {
    const { ctx } = this;
    ctx.body = 'main';
  }
}

module.exports = CommonController;
