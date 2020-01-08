const express = require('express');
const routes = express.Router();
const AlbumController = require('../controllers/AlbumController');

const auth = require('../middleware/auth');

routes.get('/', auth, AlbumController.getAll);
routes.get('/news', auth, AlbumController.getAllNews);
routes.get('/recents', auth, AlbumController.getAllRecents);
routes.get('/:id', auth, AlbumController.getById);
routes.post('/', auth, AlbumController.insert);
routes.put('/:id', auth, AlbumController.update);
routes.delete('/:id', auth,AlbumController.remove);

module.exports = routes;

/*
getAll          - Retornar todos albuns
getById         - Retornar album
UI              - Executar album
insert          - Criar album 
delete          - Deletar album
update          - Atualizar albums
getNewAlbuns    - Retornar albuns novos
getRecentAlbuns - Retornar albuns recentes
*/
