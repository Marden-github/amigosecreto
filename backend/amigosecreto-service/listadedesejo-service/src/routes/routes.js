const { Router } = require('express');
const listadedesejoController = require('../controllers/listadedesejoController');





const routes = Router();

routes.post('/listadedesejos', listadedesejosController.create);
routes.post('/listadedesejos/addItem', listadedesejosController.addItemNaListaDeDesejos);
routes.get('/listadedesejos', listadedesejosController.getAll);
routes.get('/listadedesejos/:id', listadedesejosController.getById);
routes.get('/listadedesejos/byParticipante/:idParticipante', listadedesejosController.getListaDeDesejosByParticipante);
routes.put('/listadedesejos', listadedesejosController.edit);
routes.put('/listadedesejos/editaListaPorId/:id', listadedesejosController.edit);
routes.delete('/listadedesejos/:id', listadedesejosController.delete);
routes.delete('/listadedesejos/:id/dellItem/:idParticipante', listadedesejosController.dellItemDaListaDeDesejos);

module.exports = routes;