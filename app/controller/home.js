'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async addSchedule() {
    const {
      ctx,
    } = this;
    const body = ctx.request.body;
    console.log('接收参数', body);
    const res = await ctx.service.model.insert(body);
    ctx.body = {
      code: 200,
      msg: 'ok',
      data: res,
    };
  }

  async getScheduleList() {
    const {
      ctx,
    } = this;
    const condition = {
      hasExpired: false,
    };
    const res = await ctx.service.model.find(condition);
    ctx.body = {
      code: 200,
      msg: 'ok',
      data: res.length > 0 ? res : [],
    };
  }

  async updateSchedule() {
    const {
      ctx,
    } = this;
    const res = await ctx.service.model.update({
      _id: ctx.request.body.id,
    });
    ctx.body = {
      code: 200,
      msg: 'ok',
      data: res,
    };
  }
}

module.exports = HomeController;
