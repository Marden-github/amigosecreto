const { Router } = require('express');
const loginController = require('../controllers/loginController');
const auth = require('../middleware/auth');
const routes = Router();

routes.get('/login', auth, (req, res)=> { res.json({"mensagem":"Login OK"});  });
routes.post('/login', loginController.validarLogin);
routes.post('/login/create',  loginController.create);

module.exports = routes;