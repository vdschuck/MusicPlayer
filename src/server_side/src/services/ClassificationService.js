const Classification = require('../models/Classification');
const BaseService = require('./BaseService')(Classification);

BaseService.getAllByMedia = async function (id) {
  let query = { 'media': id };
  return await Classification.find(query);
};

BaseService.getScoreByMedia = async function (id) {
  let query = { 'media': id };
  let result = await Classification.find(query).select(['value']);
  let count = 0

  for (let item of result) {
    count += item.value
  }

  return count / result.length;
};



module.exports = BaseService;