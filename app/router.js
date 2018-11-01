'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller,
  } = app;
  router.get('/api/v2/topics', controller.topics.create);
  router.get('/memberinfo', controller.member.getUserInfo);
};
