const UniversityService = require('../services/UniversityService');
const BaseController = require('./BaseController')(UniversityService);

module.exports = BaseController;