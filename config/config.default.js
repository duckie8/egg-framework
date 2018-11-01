'use strict';

module.exports = appInfo => {
  const config = exports = {
    security: {
      csrf: {
        enable: false,
      },
    },
  };

  config.jwt = {
    key: 'lua-resty-jwt',
    expires: '1.5h',
  };

  // add your config here
  config.middleware = [ 'errorHandler', 'authToken' ];

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'xintijiao',
    host: '120.26.44.61',
    port: 13306,
    username: 'xintijiao',
    password: 'Zt1237890',
    // delegate: 'myModel', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
    // baseDir: 'my_model', // load all files in `app/${baseDir}` as models, default to `model`
    // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
    // more sequelize options
  };

  config.baseurl = {
    url: 'http://www.baidu.com',
  };

  return config;
};
