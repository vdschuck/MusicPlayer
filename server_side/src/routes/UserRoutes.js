const express = require('express');
const routes = express.Router();
const UserController = require('../controllers/UserController');

const auth = require('../middleware/auth');

routes.get('/me', auth, UserController.me);
routes.post('/me/logout', auth, UserController.logout);
routes.post('/me/logoutAll', auth, UserController.logoutAll);
routes.post('/me/password/recover', UserController.recoverPassword);
routes.get('/', auth, UserController.getAll);
routes.get('/:id', auth, UserController.getById);
routes.put('/:id', auth, UserController.update);
routes.delete('/:id', auth, UserController.remove);
routes.post('/signup', UserController.signUp);
routes.post('/login', UserController.login);

module.exports = routes; 

/*
getMe               - retorarEu
getAll              - retornarTodos
getById             - retornar
signUp              - criar
update              - atualizar
remove              - deletar
recoverPassword     - recuperarSenha
login               - autenticar
logout              - logout
logoutAll           - logoutTodosAparelhos
*/