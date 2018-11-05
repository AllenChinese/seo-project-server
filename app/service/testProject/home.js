'use strict';

const Service = require('egg').Service;

class GetTitleService extends Service {
  async getTitle(api, data = {}) {
    const { ctx } = this;
    // const msg = {
    //   success: true,
    //   results: [
    //     {
    //       title: 'hello world',
    //       name: 'allen',
    //     },
    //     {
    //       title: 'hello again',
    //       name: 'jack',
    //     },
    //   ],
    // };
    const { getData } = ctx.helper;
    const url = getData(this.app.api, api, '');
    // api request
    const msg = await ctx.curl(url, {
      dataType: 'json',
      data,
    });

    return msg.data;
  }
}

module.exports = GetTitleService;
