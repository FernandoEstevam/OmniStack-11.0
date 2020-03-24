'use strict';

const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());

// Rota Raiz
app.get('/', (resquest, response) => {
  return response.json({
    evento: "Semana OmniStack 11.0",
    data: new Date()
  });
});

// Routes Params
app.get('/users/:id', (request, response) => {
  const params = request.params;

  console.log(params);

  return  response.json({
    evento: "Semana OmniStack 11.0",
    data: new Date()
  });
});

// Routes Body
app.post('/users', (request, response) => {
  const body = request.body;

  console.log(body);

  return  response.json({
    evento: "Semana OmniStack 11.0",
    data: new Date()
  });
});

app.listen(3333);