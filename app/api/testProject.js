'use strict';

const initCommonApi = require('./common');
const project = 'testProject';
const projectId = '5bdfe5af8ff11d2c4949bc77';
module.exports = env => {
  const commonApi = initCommonApi(env);
  return {
    // 获取首页列表
    indexList: commonApi.bufferApi(projectId, project, '/list', '/list'),
  };
};
