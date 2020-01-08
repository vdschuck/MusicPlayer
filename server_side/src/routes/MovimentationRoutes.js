const express = require('express');
const routes = express.Router();
const MovimentationController = require('../controllers/MovimentationController');

const auth = require('../middleware/auth');

routes.get('/', auth, MovimentationController.getAll);
routes.get('/account/:id', auth, MovimentationController.getAllByAccount);
routes.get('/:id', auth, MovimentationController.getById);
routes.post('/', auth, MovimentationController.insert);
routes.put('/:id', auth, MovimentationController.update);
routes.delete('/:id', auth, MovimentationController.remove);
routes.get('/:id/receipt', auth, MovimentationController.generateReceipt);
routes.post('/seller/:id', auth, MovimentationController.getAllBySeller);
routes.get('/sales', auth, MovimentationController.getSalesValue);
routes.get('/sales/details', auth, MovimentationController.getSalesDetails);

module.exports = routes; 

/*
getAllByAccount     - retornarTodos
getById             - retornar
insert              - criar
update              - atualizar
remove              - excluir
generateReceipt     - emitirComprovante
getAllBySeller      - retornaMovitaçãoDoUsuario
*/