'use strict';

module.exports = appInfo => {
  let config = exports = {};
  config = {
    // use for cookie sign key, should change to your own and keep security
    keys: appInfo.name + '_1541054919103_4534',
    // project
    projects: [
      'testProject',
    ],
    // views
    view: {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.tpl': 'nunjucks',
      },
    },
    // add your config here
    middleware: [
      'robot',
    ],
    httpclient: {
      request: {
        timeout: 8000,
      },
      followRedirect: true,
    },
    // 过期时间
    time: {
      expire: 3600 * 24 * 30,
    },
    // 缓存配置
    memcached: {
      dev: '192.168.200.244:11211',
      cn: '',
    },
    // robot's configurations
    robot: {
      ua: [
        /Baiduspider/i,
      ],
    },
  };
  return config;
};
