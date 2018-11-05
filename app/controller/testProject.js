'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const { getData } = ctx.helper;
    // this.ctx.body = 'hi, egg';
    const msgRes = await ctx.service.testProject.home.getTitle('testProject.indexList');
    const msg = getData(msgRes, 'data.results', []);

    await ctx.render('index.nj', {
      msg,
    });
  }
}

module.exports = HomeController;
