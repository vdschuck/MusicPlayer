const FavoriteService = require('../services/FavoriteService');
const BaseController = require('./BaseController')(FavoriteService);

BaseController.getAllByUser = async function (req, res) {
  try {
    let userId = req.user._id;
    let data = await FavoriteService.getAllByUser(userId);

    return res.json(data);
  } catch (e) {
    Thrower.redirect(res, e);
  }
};

BaseController.removeMedia = async function (req, res) {
  try {
    let mediaId = req.params.id;
    let userId = req.user._id;
    let data = await FavoriteService.removeMedia(mediaId, userId);

    return res.json(data);
  } catch (e) {
    Thrower.redirect(res, e);
  }
};

BaseController.insertMedia = async function (req, res) {
  try {
    let media = req.body;
    let userId = req.user._id;
    let data = await FavoriteService.insertMedia(media, userId);

    return res.json(data);
  } catch (e) {
    Thrower.redirect(res, e);
  }
};

module.exports = BaseController;

/*
getById               - retornar
getAllByUser          - retornaFavoritosPorUsuario
insert                - criar
update                - atualizar
delete                - remover
*/