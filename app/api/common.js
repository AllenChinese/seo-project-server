'use strict';
// api 环境判断
module.exports = env => {
  const DOMIAN = env === 'prod' ? 'https://my.cn' : 'https://my.net';
  const MOCK = 'https://easy-mock.com/mock/';
  const isMock = env === 'local';

  if (isMock) {
    return {
      bufferApi: (projectId, project, path, mock) => {
        return `${MOCK}${projectId}/${project}${mock}`;
      },
    };
  }
  return {
    bufferApi: (projectId, project, path, mock) => {
      return `${DOMIAN}/${path}`;
    },
  };
};
