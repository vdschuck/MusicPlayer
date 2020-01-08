const express = require('express');
const routes = express.Router();
const FavoriteController = require('../controllers/FavoriteController');

const auth = require('../middleware/auth');

routes.get('/', auth, FavoriteController.getAllByUser);
routes.get('/:id', auth, FavoriteController.getById);
routes.post('/', auth, FavoriteController.insert);
routes.put('/:id', auth, FavoriteController.update);
routes.delete('/:id', auth, FavoriteController.remove);
routes.post('/media', auth, FavoriteController.insertMedia);
routes.delete('/media/:id', auth, FavoriteController.removeMedia);

module.exports = routes;