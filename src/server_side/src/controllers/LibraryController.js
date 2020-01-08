const LibraryService = require('../services/LibraryService');
const BaseController = require('./BaseController')(LibraryService);

BaseController.getAllByUser = async function (req, res) {
  try {
    let userId = req.user._id;
    let data = await LibraryService.getAllByUser(userId);

    return res.json(data);
  } catch (e) {
    Thrower.redirect(res, e);
  }
};

BaseController.removeMedia = async function (req, res) {
  try {
    let mediaId = req.params.id;
    let userId = req.user._id;
    let data = await LibraryService.removeMedia(mediaId, userId);

    return res.json(data);
  } catch (e) {
    Thrower.redirect(res, e);
  }
};

BaseController.insertMedia = async function (req, res) {
  try {
    let media = req.body;
    let userId = req.user._id;
    let data = await LibraryService.insertMedia(media, userId);

    return res.json(data);
  } catch (e) {
    Thrower.redirect(res, e);
  }
};

module.exports = BaseController;

/*
getAllByUser          - retornaMidiasCompradasPorUsuario
getById               - retornaUmaMidiaCompradaPorUsuario
*/