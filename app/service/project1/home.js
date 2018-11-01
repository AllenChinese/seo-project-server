'use strict';

const Service = require('egg').Service;

class GetTitleService extends Service {
  getTitle() {
    const msg = {
      title: 'hello world',
    };
    return msg;
  }
}

module.exports = GetTitleService;
