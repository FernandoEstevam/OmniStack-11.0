'use strict';

const express = require('express');

const routes = express.Router();

// Rota Raiz
routes.get('/', (resquest, response) => {
  return response.json({
    evento: "Semana OmniStack 11.0",
    data: new Date()
  });
});

// Routes Params
routes.get('/users/:id', (request, response) => {
  const params = request.params;

  console.log(params);

  return  response.json({
    evento: "Semana OmniStack 11.0",
    data: new Date()
  });
});

// Routes Body
routes.post('/users', (request, response) => {
  const body = request.body;

  console.log(body);

  return  response.json({
    evento: "Semana OmniStack 11.0",
    data: new Date()
  });
});

module.exports = routes;