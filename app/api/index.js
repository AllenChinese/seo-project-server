'use strict';
const initTestProject = require('./testProject');

module.exports = env => {
  return {
    testProject: initTestProject(env),
  };
};
