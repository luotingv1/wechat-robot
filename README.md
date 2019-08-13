## 微信小秘书


## 功能

很听你话的私人小秘书，帮你创建定时任务，每日提醒，纪念日提醒，当日提醒

文字支持格式：（关键词之间需要用空格分开，）

* “提醒 我 18:30 快要下班了，准备一下，不要忘记带东西” **（当天指定时间提醒）**
* “提醒 其他人昵称 2019-09-10 10:00 工作再忙，也要记得喝水”**（委托小秘书提醒其他人）**
* “提醒 我 每天 8:00 出门记得带钥匙，公交卡还有饭盒”**（每日指定时间提醒）**
* “提醒 wo 2019-09-10 10:00 还有两天就是女朋友的生日，要提前准备一下” **（指定日期时间提醒）**

效果图如下：

提醒自己

![](https://user-gold-cdn.xitu.io/2019/4/1/169d8644f45b3b0e?w=1080&h=1920&f=png&s=605076)

委托提醒（前提是你和你想要提醒的人都是小秘书的好友，采用的是昵称查找用户，不是备注要注意）

![](https://user-gold-cdn.xitu.io/2019/4/2/169dc3941879e3d6?w=1137&h=1080&f=png&s=425417)

数据库中已添加任务

![](https://user-gold-cdn.xitu.io/2019/4/1/169d865ac41c305c?w=2136&h=904&f=png&s=249991)

## 安装

为了让数据持久化，使用了mongodb数据库，保存所有的定时任务，所以需要本地安装好mongodb数据库，本项目mongodb端口默认27017

## 项目运行

由于需要安装chromium,所以要先配置一下镜像，注意由于wechaty的限制，必须使用node10以上版本

### npm或者yarn 配置淘宝源

**(很重要，防止下载chromium失败，因为下载文件在150M左右，所以在执行npm run start后需要等待下载大概一两分钟以上，请耐心等待)**
npm

    npm config set registry https://registry.npm.taobao.org
    npm config set disturl https://npm.taobao.org/dist
    npm config set puppeteer_download_host https://npm.taobao.org/mirrors
yarn

    yarn config set registry https://registry.npm.taobao.org
    yarn config set disturl https://npm.taobao.org/dist
    yarn config set puppeteer_download_host https://npm.taobao.org/mirrors


### 下载项目安装依赖

    git clone https://github.com/luotingv1/wechat-robot.git
    cd wechat-robot
    npm i
    npm run dev
    
### 扫描登录

用微信扫描控制台显示的二维码，在手机上同意登录即可。使用其他微信发送指定格式文字进行添加定时任务。

## 服务器部署
1、如果需要在服务器中部署，需要先扫描二维码登录一次，生成微信维持登录状态的json文件，如下图：

![](https://user-gold-cdn.xitu.io/2019/4/2/169dc2e62b83dca6?w=784&h=272&f=png&s=31668)
2、生成此文件后，可以使用pm2工具进行进程守护。


## 常见问题

3. 支持 红包、转账、朋友圈… 吗

   支付相关 - 红包、转账、收款 等都不支持

4. 更多关于wechaty功能相关接口

     [参考wechaty官网文档](https://docs.chatie.io/v/zh/)

5. 其他问题解决方案
    * 本地是否安装了mongodb数据库
    * 先检查node版本是否大于10
    * 确认npm或yarn已经配置好淘宝源  
    * 存在package-lock.json文件先删除
    * 删除`node_modules`后重新执行`npm install` 或`cnpm install`


