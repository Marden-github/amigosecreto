const { Router } = require('express');
const httpProxy = require('express-http-proxy');
const routes = Router();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "API Gateway Amigo Secreto",
      description: "API Gateway Information",
      contact: {
        name: "Prof. H1 Developer"
      },
      servers: ["http://localhost:3330"]
    }
  },
  // ['.routes/*.js']
  apis: ["./src/routes/routes.js"]
};

const {
    URL_PARTICIPANTE_API,
    URL_GRUPO_API,
    URL_SORTEIO_API,
    URL_LISTADESEJO_API,
    URL_CONVITE_API,
  } = require('./url');
  
  const participanteServiceProxy = httpProxy(URL_PARTICIPANTE_API);
  const grupoServiceProxy = httpProxy(URL_GRUPO_API);
  
  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  routes.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));  

  // Routes
/**
 * @swagger
 * /:
 *  get:
 *    description: Rota padrão para teste API Gateway
 *    responses:
 *      '200':
 *        description: API online
 */
  routes.get('/', (req, res) => res.send('Ola API Gateway'));
  
  /**
 * @swagger
 * /participante/{id}:
 *    get:
 *      description: Use para retornar os dados de um participante
 *    parameters:
 *      - name: id    
 *        in: path
 *        description: id do participante
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '201':
 *        description: Participante encontrado com sucesso
 */
  routes.get('/participante/:id', (req, res) => participanteServiceProxy(req, res));
  routes.get('/grupo/:id', (req, res) => grupoServiceProxy(req, res));

  module.exports = routes;  