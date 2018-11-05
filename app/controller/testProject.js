'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const { getData } = ctx.helper;
    // this.ctx.body = 'hi, egg';
    const msgRes = ctx.service.testProject.home.getTitle();
    const msg = getData(msgRes, 'results', []);
    await ctx.render('index.nj', {
      msg,
    });
  }
}

module.exports = HomeController;
