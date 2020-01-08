const express = require('express');
const routes = express.Router();
const AccountController = require('../controllers/AccountController');

const auth = require('../middleware/auth');

routes.get('/', auth, AccountController.getAll);
routes.get('/:id', auth, AccountController.getById)
routes.post('/', auth, AccountController.insert);
routes.delete('/:id', auth, AccountController.remove);
routes.get('/:id/credit', auth, AccountController.viewCredit);
routes.put('/:id/credit', auth, AccountController.addCredit);

module.exports = routes;

/*
getAll              - retornarTodos
getById             - retornar
insert              - criar
update              - atualizar
addCredit           - adicionarCredito
viewCredits         - visualizarCredito
remove              - excluir
*/