'use strict';

const err_type = require('../../config/err_type');

module.exports = () => {
  return async function authToken(ctx, next) {
    const header = ctx.header;
    if (header.member) {
      const ref = await next();
      return ref;
    }
    ctx.err(err_type.auth_fail, ctx);
  };
};
