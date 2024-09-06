const { Router } = require('express');
const sorteioController = require('../controllers/sorteioController');
const routes = Router();

routes.post('/sorteio', sorteioController.sortear);

module.exports = routes;