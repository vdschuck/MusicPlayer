const NotificationService = require('../services/NotificationService');
const BaseController = require('./BaseController')(NotificationService);

BaseController.getAllByUser = async function (req, res) {
  try {
    let userId = req.user._id;
    let enable = req.query.enable;
    let data = await NotificationService.getAllByUser(userId, enable);

    return res.json(data);
  } catch (e) {
    Thrower.redirect(res, e);
  }
};

module.exports = BaseController;