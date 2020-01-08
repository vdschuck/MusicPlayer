const Library = require('../models/Library');
const BaseService = require('./BaseService')(Library);

BaseService.getAllByUser = async function (userId) {
  let query = { 'user': userId };
  let data = await Library.findOne(query);

  return data;
};

BaseService.removeMedia = async function (mediaId, userId) {
  let query = { 'user': userId };
  let library = await Library.findOne(query);
  if (!library) {
    throw new PersistenceError('LibraryAndObviousMediaNotFound');
  }
  library.media.pop(mediaId);
  return await library.save();
};

BaseService.insertMedia = async function (media, userId) {
  let query = { 'user': userId };
  let library = await Library.findOne(query);
  library = library ? library : await Library.create(query);

  return await Library.findByIdAndUpdate(library._id, { $addToSet: { 'media': media } }, { new: true, useFindAndModify: false });
};


module.exports = BaseService;