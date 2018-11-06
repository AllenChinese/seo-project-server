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

  async clearVersion() {
    const ctx = this.ctx;
    const project = ctx.params.project;
    const projectList = this.app.config.projects;
    if (projectList.indexOf(project) === -1) {
      ctx.body = `找不到项目: ${project}`;
    } else {
      console.log('===============');
      const time = await ctx.service.common.version.clear(project);
      console.log(time);
      const resultTxt = time ? '成功' : '失败';
      await ctx.render('default/clearVersion.nj', {
        projectName: project,
        resultTxt,
        time,
      });
    }
  }
}

module.exports = CommonController;
