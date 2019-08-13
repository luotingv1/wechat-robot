/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1554708903600_2378';
  // add your middleware config here
  config.middleware = [];
  // 数据库
  config.mongoose = {
    url: 'mongodb://127.0.0.1/wechatAssitant',
    options: { useNewUrlParser: true },
  };
  // add your user config here
  const userConfig = {
    NAME: '小宝贝', // 备注姓名
    NICKNAME: '🍉酱芦子', // 昵称
    MEMORIAL_DAY: '2017/07/28', // 你和收信者的纪念日
    CITY: 'zhejiang', // 收信者所在城市
    LOCATION: 'jinhua', // 收信者所在区 （可以访问墨迹天气网站后，查询区的英文拼写）
    SENDDATE: '0 0 9 * * *', // 定时发送时间 每天8点0分0秒发送，规则见 /schedule/index.js
    ONE: 'http://wufazhuce.com/', // ONE的web版网站
    MOJI_HOST: 'https://tianqi.moji.com/weather/china/', // 中国墨迹天气url
    ROOMNAME: '/^微信每日说/i', // 群名(请只修改中文，不要删除符号，这是正则)
    AIBOTAPI: 'http://api.tianapi.com/txapi/robot/', // 天行机器人API 注册地址https://www.tianapi.com/signup.html?source=474284281
    APIKEY: '762be789103e1ae7b65573f8d4fc0df6', // 天行机器人apikey
    AUTOREPLY: true,
  };

  return {
    ...config,
    ...userConfig,
  };
};
