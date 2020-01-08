const express = require('express');
const routes = express.Router();
const UniversityController = require('../controllers/UniversityController');

const auth = require('../middleware/auth');

routes.get('/', auth, UniversityController.getAll);
routes.get('/:id', auth, UniversityController.getById);
routes.post('/', auth, UniversityController.insert);
routes.put('/:id', auth, UniversityController.update);
routes.delete('/:id', auth, UniversityController.remove);

module.exports = routes; 

/*
getAll            - retornarTodas
getById           - retornar
insert            - criar
update            - atualizar
remove            - deletar
*/