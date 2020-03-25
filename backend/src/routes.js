'use strict';

const express = require('express');

// Controllers
const OngController = require('../src/controllers/OngController');
const IncidentController = require('../src/controllers/IncidentController');

const connection = require('./database/connection');

const routes = express.Router();

// ONGS
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// Incidents
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;