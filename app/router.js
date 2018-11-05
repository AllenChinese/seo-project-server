'use strict';
// 测试项目
const testProjectRouter = require('./router/testProject');
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller: { common } } = app;
  testProjectRouter(app);
};
