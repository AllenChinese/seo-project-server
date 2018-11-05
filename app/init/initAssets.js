'use strict';

module.exports = app => {
  const projects = app.config.project;
  const env = app.config.env;
  const diffSuffix = env === 'prod' ? '' : '_develop';

  app.locals.assets = {};

  projects.forEach(item => {
    app.locals.assets[item] = `https://${diffSuffix}`;
  });
};
