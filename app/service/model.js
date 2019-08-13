'use strict';

const Service = require('egg').Service;

class ModelService extends Service {
  async insert(conditions) {
    const { ctx } = this;
    return await ctx.model.Assistant.create(conditions);
  }

  async find(conditions) {
    const { ctx } = this;
    return await ctx.model.Assistant.find(conditions);
  }

  async update(conditions) {
    const { ctx } = this;
    return await ctx.model.Assistant.updateOne(conditions, { hasExpired: true });
  }

}

module.exports = ModelService;
