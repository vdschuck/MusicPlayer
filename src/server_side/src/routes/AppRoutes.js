const express = require('express');
const routes = express.Router();
const AppController = require('../controllers/AppController');

routes.get('/', AppController.root);

module.exports = routes; 