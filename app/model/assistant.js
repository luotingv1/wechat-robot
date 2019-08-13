'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const Assistant = new Schema({
    subscribe: String, // 订阅者
    setter: String, // 设定任务者
    content: String, // 订阅内容
    time: String, // 定时日期
    isLoop: Boolean, // 是否为循环定时任务
    hasExpired: {
      type: Boolean,
      default: false,
    }, // 判断任务是否过期
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  return mongoose.model('Assistant', Assistant);
};
