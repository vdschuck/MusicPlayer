const Favorite = require('../models/Favorite');
const BaseService = require('./BaseService')(Favorite);

BaseService.getAllByUser = async function (userId) {
  let query = { 'user': userId };

  return await Favorite.find(query);
};

BaseService.removeMedia = async function (mediaId, userId) {
  let query = { 'user': userId };
  let favorite = await Favorite.findOne(query);
  if (!favorite) {
    throw new PersistenceError('FavoriteNotFound');
  }
  favorite.media.pop(mediaId);
  return await favorite.save();
};

BaseService.insertMedia = async function (media, userId) {
  let query = { 'user': userId };
  let favorite = await Favorite.findOne(query);
  favorite = favorite ? favorite : await Favorite.create(query);

  return await Favorite.findByIdAndUpdate(favorite._id, { $addToSet: { 'media': media } }, { new: true, useFindAndModify: false });
};

module.exports = BaseService;