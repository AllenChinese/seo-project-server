'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // this.ctx.body = 'hi, egg';
    const msg = ctx.service.project1.home.getTitle();
    await ctx.render('index.nj', {
      msg,
    });
  }
}

module.exports = HomeController;
