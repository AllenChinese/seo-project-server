// lodash 工具库 辅助 api 数据处理
'use strict';
const _get = require('lodash').get;
const qs = require('qs');

module.exports = {
  getData(obj, path, defaultValue = '') {
    return _get(obj, path, defaultValue);
  },
  getUrlParams(string = '') {
    const paramString = string;
    const reg = /\?(.+)/;
    const result = paramString.match(reg);
    return result
      ? qs.parse(result[1])
      : '';
  },
  jsonStringify(obj) {
    const str = JSON.stringify(obj).replace(/"|'/gi, '').trim();
    console.log('str', str);
    return str;
  },
};
