const { Router } = require('express');
const grupoController = require('../controllers/grupoController');
const routes = Router();

routes.get('/grupo/:id', grupoController.getById);
routes.get('/grupo/byResponsavel/:idResponsavel', grupoController.getGruposByResponsavel);
routes.get('/grupo/byParticipante/:idParticipante', grupoController.getGruposByParticipante);
routes.post('/grupo', grupoController.create);
routes.post('/grupo/addParticipante', grupoController.addParticipante);
routes.put('/grupo', grupoController.edit);
routes.delete('/grupo/:id', grupoController.delete);
routes.delete('/grupo/:id/delParticipante/:idParticipante', grupoController.delParticipante);

module.exports = routes;