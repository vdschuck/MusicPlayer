const express = require('express');
const routes = express.Router();
const MediaController = require('../controllers/MediaController');

const auth = require('../middleware/auth');

routes.get('/', auth, MediaController.getAll);
routes.get('/news', auth, MediaController.getAllNews);
routes.get('/recents', auth, MediaController.getAllRecents);
routes.get('/released', auth, MediaController.getAllReleased);
routes.get('/:id', auth, MediaController.getById);
routes.post('/', auth, MediaController.insert);
routes.put('/:id', auth, MediaController.update);
routes.delete('/:id', auth, MediaController.remove);
routes.get('/:id/content', auth, MediaController.getContent);
routes.put('/:id/release', auth, MediaController.release);
routes.get('/:id/download', auth, MediaController.download);
routes.post('/:id/buy', auth, MediaController.buy);

module.exports = routes;

/*
getAll                - retornarTodas
getAllAvailables      - retornarTodasDisponibilizadas
getById               - retornar
insert                - criar
update                - atualizar
remove                - remover
getContent            - executarConteudo
release               - disponibilizar
download              - baixar
buy                   - comprar
*/