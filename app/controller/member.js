'use strict';

const Controller = require('egg').Controller;

class MemberController extends Controller {
  async getUserInfo() {
    const ctx = this.ctx;
    ctx.response.success({ ctx, data: this.app.config.baseurl.url });
  }
}

module.exports = MemberController;

