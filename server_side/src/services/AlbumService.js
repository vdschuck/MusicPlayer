const Album = require('../models/Album');
const BaseService = require('./BaseService')(Album);

const DateHelper = require('../util/DateHelper');
const QueryHelper = require('../util/QueryHelper');

BaseService.getAllNews = async function () {
  let minDate = DateHelper.getDateDeacreasedBy(new Date(), 40);
  let query = QueryHelper.getCreatedAtGreaterThan(minDate);

  return await Album.find(query);
};

BaseService.getAllRecents = async function () {
  let minDate = DateHelper.getDateDeacreasedBy(new Date(), 60);
  let query = QueryHelper.getCreatedAtGreaterThan(minDate);

  return await Album.find(query);
};

module.exports = BaseService;