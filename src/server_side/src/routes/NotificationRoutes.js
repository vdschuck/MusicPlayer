const express = require('express');
const routes = express.Router();
const NotificationController = require('../controllers/NotificationController');

const auth = require('../middleware/auth');

routes.get('/', auth, NotificationController.getAllByUser);
routes.post('/', auth, NotificationController.insert);
routes.put('/:id', auth, NotificationController.update);

module.exports = routes;