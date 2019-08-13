'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller,
  } = app;

  router.post('/api/addSchedule', controller.home.addSchedule);

  router.get('/api/getScheduleList', controller.home.getScheduleList);

  router.post('/api/updateSchedule', controller.home.updateSchedule);

};
