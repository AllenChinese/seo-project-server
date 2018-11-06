'use strict';
const Memcached = require('memcached');

module.exports = app => {
  const env = app.config.env;
  const cacheServer = env === 'prod' ? app.config.memcached.cn : app.config.memcached.dev;
  const memcached = new Memcached(cacheServer, {});

  const projects = app.config.projects;
  const expire = app.config.time.expire;
  // 把 memcached 部署到 app 下
  app.memcached = memcached;
  app.locals.time = {};

  projects.forEach(item => {
    const timekey = `${item}_time`;
    const time = '?v=' + new Date().getTime();
    // 过期时间：30天

    memcached.get(timekey, (err, data) => {
      if (!err && data) {
        app.locals.time[item] = data;
        console.log(`${timekey} has a memed timestamp`, data);
      } else {
        console.log(`${timekey} has not a memed timestamp`);
        memcached.set(timekey, time, expire, () => {
          console.log(`${timekey} has been created`, time);
        });
        app.locals.time[item] = time;
      }
    });
  });

  app.messenger.on('time_clear', data => {
    const ctx = app.createAnonymousContext();
    ctx.runInBackground(async () => {
      await ctx.service.common.version.update(data);
    });
  });
};
