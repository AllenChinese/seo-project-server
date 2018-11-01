'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const ctx = this.ctx;
    // this.ctx.body = 'hi, egg';
    const title = 'hello world';
    await ctx.render('index.nj', {
      title,
    });
  }
}

module.exports = HomeController;
