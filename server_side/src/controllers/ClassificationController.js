const ClassificationService = require('../services/ClassificationService');
const BaseController = require('./BaseController')(ClassificationService);

BaseController.getAllByMedia = async function (req, res) {
  try {
    let id = req.params.id;
    let data = await ClassificationService.getAllByMedia(id);

    return res.json(data);
  } catch (e) {
    Thrower.redirect(res, e);
  }
};

BaseController.getScoreByMedia = async function (req, res) {
  try {
    let id = req.params.id;
    let data = await ClassificationService.getScoreByMedia(id);

    return res.json(data);
  } catch (e) {
    Thrower.redirect(res, e);
  }
};

module.exports = BaseController;