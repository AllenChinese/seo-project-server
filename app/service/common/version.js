'use strict';
const Service = require('egg').Service;

class VersionService extends Service {
  async clear(projectName) {

    try {
      const timekey = `${projectName}_time`;
      const expire = this.app.config.time.expire;
      const newTime = '?v=' + new Date().getTime();
      // this.app.locals.time[projectName] = newTime

      const result = await new Promise((resolve, reject) => {
        console.log('-----------------', projectName);
        this.app.memcached.set(timekey, newTime, expire, err => {
          console.log(err);
          if (err) {
            reject(false);
          } else {
            resolve(true);
          }
        });
      });

      this.ctx.app.messenger.sendToApp('time_clear', {
        projectName,
        time: newTime,
      });
      return result ? newTime : false;
    } catch (err) {
      return false;
    }

  }

  async update(config) {
    const { time, projectName } = config;
    this.app.locals.time[projectName] = time;
    console.log('update time success');
  }
}

module.exports = VersionService;
