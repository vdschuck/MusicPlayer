const University = require('../models/University');
const BaseService = require('./BaseService')(University);

module.exports = BaseService;