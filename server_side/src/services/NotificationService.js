const Notification = require('../models/Notification');
const BaseService = require('./BaseService')(Notification);

BaseService.getAllByUser = async function (userId, enable) {
  let query = { 'user': userId };

  if (enable) query.enable = enable;

  let data = await Notification.find(query);

  return data;
};

module.exports = BaseService;