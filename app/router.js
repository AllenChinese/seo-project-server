'use strict';
// 测试项目
const testProjectRouter = require('./router/testProject');
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller: { common } } = app;
  // 通用启动页
  router.get('/', common.main);
  // 清时间戳
  router.get('/:project/clearVersion', common.clearVersion);
  testProjectRouter(app);
};
