const Media = require('../models/Media');
const MovimentationService = require('./MovimentationService');
const LibraryService = require('./LibraryService');
const NotificationService = require('./NotificationService');
const BaseService = require('./BaseService')(Media);
const UsersValidator = require('../models/validators/User');

const DateHelper = require('../util/DateHelper');
const QueryHelper = require('../util/QueryHelper');

BaseService.getAllReleased = async function () {
  let query = { 'isAvailable': true };
  return await Media.find(query).select(['-content', '-image']);
};

BaseService.getAllNews = async function () {
  let minDate = DateHelper.getDateDeacreasedBy(new Date(), 40);
  let query = QueryHelper.getCreatedAtGreaterThan(minDate);

  return await Media.find(query);
};

BaseService.getAllRecents = async function () {
  let minDate = DateHelper.getDateDeacreasedBy(new Date(), 60);
  let query = QueryHelper.getCreatedAtGreaterThan(minDate);

  return await Media.find(query);
};

BaseService.getById = async function (id) {
  return await Media.findById(id).select(['-content', '-image'])
};

BaseService.getContent = async function (id) {
  return await Media.findById(id).select(['content', 'image']);
};

BaseService.release = async function (id) {
  let fieldToUpdated = { 'isAvailable': true, 'isAvailableSince': new Date() };
  let payload = { $set: fieldToUpdated };

  return await Media.findByIdAndUpdate(id, payload, { new: true, useFindAndModify: false });
};

BaseService.download = async function (id) {
  return await Media.findById(id).select('content');
};

BaseService.buy = async function (movimentation) {
  let data = await MovimentationService.insert(movimentation);

  let libraryPayload = {
    'user': movimentation.buyer,
    'media': movimentation.media
  };
  await LibraryService.insert(libraryPayload);

  return data;
};

BaseService.setMidiaInappropriate = async function (mediaId, currentUser) {
  UsersValidator.validateUserAdmin(currentUser);

  let payload = { 'isApropriated': false };
  var media = await Media.findOneAndUpdate(mediaId, payload, { new: true, useFindAndModify: false });

  NotificationService.insert({
    'user': media.owner,
    'description': 'The media (' + media.name + ') has been blocked by inappropriate content!',
    'enable': true,
  });

  return media;
};

module.exports = BaseService;