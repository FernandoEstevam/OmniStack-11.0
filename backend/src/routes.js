'use strict';

const express = require('express');

// Controllers
const OngController = require('../src/controllers/OngController');
const IncidentController = require('../src/controllers/IncidentController');
const ProfileController = require('../src/controllers/ProfileController');
const SessionController = require('../src/controllers/SessionController');

const connection = require('./database/connection');

const routes = express.Router();

// Sessions(login e logout)
routes.post('/sessions', SessionController.create);

// ONGS
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// Incidents
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;