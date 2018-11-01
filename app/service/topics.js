'use strict';

const Service = require('egg').Service;

class TopicsService extends Service {
  constructor(ctx) {
    super(ctx);
    this.root = 'https://cnodejs.org/api/v1';
  }

  async create() {
    this.ctx.tran();
    const data = await this.ctx.model.WsMember.findAll({
      raw: true,
    });

    let member = data[0];
    console.log(member);
    delete member.memberid;
    await this.ctx.model.WsMember.create(member, {
      transaction: this.ctx.getTran(),
    });
    member = Object.assign(member, {
      memberid: 89,
    });
    await this.ctx.model.WsMember.create(member, {
      transaction: this.ctx.getTran(),
    });
  }

  // 封装统一的调用检查函数，可以在查询、创建和更新等 Service 中复用
  checkSuccess(result) {
    if (result.status !== 200) {
      const errorMsg = result.data && result.data.error_msg ? result.data.error_msg : 'unknown error';
      this.ctx.throw(result.status, errorMsg);
    }
    if (!result.data.success) {
      // 远程调用返回格式错误
      this.ctx.throw(500, 'remote response error', {
        data: result.data,
      });
    }
  }

}

module.exports = TopicsService;
