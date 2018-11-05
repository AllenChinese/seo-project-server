'use strict';
// 通用页面集中
// main
// 404
// 405
const Controller = require('egg').Controller;

class CommonController extends Controller {
  async main() {
    const { ctx } = this;
    ctx.body = 'main';
  }
}

module.exports = CommonController;
