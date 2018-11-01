'use strict';

const jwt = require('jsonwebtoken');
const Service = require('egg').Service;

class JwtserviceService extends Service {
  async sign(claim) {
    let key = this.app.config.jwt.key;
    // const exp = this.app.config.jwt.expires;
    key = Buffer.from(key);
    const token = jwt.sign(JSON.stringify(claim), key, {
      header: {
        alg: 'HS256',
        typ: 'JWT',
      },
      algorithm: 'HS256',
    });
    return token;
  }
}

module.exports = JwtserviceService;
