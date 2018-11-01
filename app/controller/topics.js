'use strict';

const Controller = require('egg').Controller;

// 定义创建接口的请求参数规则
// const createRule = {
//   accesstoken: 'string',
//   title: 'string',
//   tab: {
//     type: 'enum',
//     values: [ 'ask', 'share', 'job' ],
//     required: false,
//   },
//   content: 'string',
// };

class TopicsController extends Controller {
  async create() {
    const ctx = this.ctx;
    const claim = {
      foo: 'bar',
    };

    await ctx.service.topics.create();
    const token = await ctx.service.jwtservice.sign(claim);
    return token;
  }
}

module.exports = TopicsController;
