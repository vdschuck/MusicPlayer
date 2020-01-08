const express = require('express');
const routes = express.Router();
const LibraryController = require('../controllers/LibraryController');

const auth = require('../middleware/auth');

routes.post('/', auth, LibraryController.insertMedia);
routes.delete('/:id', auth, LibraryController.removeMedia);
routes.get('/media', auth, LibraryController.getAllByUser);
routes.post('/media', auth, LibraryController.insertMedia);
routes.delete('/media/:id', auth, LibraryController.removeMedia);

module.exports = routes;