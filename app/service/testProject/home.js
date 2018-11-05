'use strict';

const Service = require('egg').Service;

class GetTitleService extends Service {
  getTitle() {
    const msg = {
      success: true,
      results: [
        {
          title: 'hello world',
          name: 'allen',
        },
        {
          title: 'hello again',
          name: 'jack',
        },
      ],

    };
    return msg;
  }
}

module.exports = GetTitleService;
