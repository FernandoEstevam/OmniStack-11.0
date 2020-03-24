'use strict';

const express = require('express');

const app = express();

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP
 * 
 * GET: Buscar uma informação back-end
 * POST: Criar uma informação back-end
 * PUT: Alterar uma informaçaõ no back-end
 * DELETE: Deletar uma informação back-end
 */

/**
 * 
 */

app.get('/', (resquest, response) => {
  return response.json({
    evento: "Semana OmniStack 11.0",
    data: new Date()
  });
});

app.post('/users', (resquest, response) => {
  return response.json({
    aluno: "Fernando Antonio Estvam",
    idade: 34,
    nacionalidade: "Brasileiro"
  });
});

app.listen(3333);