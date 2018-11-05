// lodash 工具库 辅助 api 数据处理
'use strict';
const _get = require('lodash').get;

module.exports = {
  getData(obj, path, defaultValue = '') {
    return _get(obj, path, defaultValue);
  },
};
