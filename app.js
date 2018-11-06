'use strict';
const initApi = require('./app/api/index');
const initTimestramp = require('./app/init/initTImestramp');
// app.js
module.exports = app => {
  app.beforeStart(async () => {
    // 应用会等待这个函数执行完成才启动
    const env = app.config.env;
    // 初始化 api
    app.api = initApi(env);
    // 初始化时间戳
    initTimestramp(app);
  });
};
