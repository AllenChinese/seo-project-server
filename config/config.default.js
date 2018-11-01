'use strict';

module.exports = appInfo => {
  let config = exports = {};
  config = {
    // use for cookie sign key, should change to your own and keep security
    keys: appInfo.name + '_1541054919103_4534',
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
    // robot's configurations
    robot: {
      ua: [
        /Baiduspider/i,
      ],
    },
  };
  return config;
};
