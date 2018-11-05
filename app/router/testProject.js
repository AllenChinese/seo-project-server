'use strict';
/**
 * Router
 * @param { Object } app - app 全局对象
 */

module.exports = app => {
  const { router, controller: { testProject } } = app;
  router.get('/testProject', testProject.index);
};
