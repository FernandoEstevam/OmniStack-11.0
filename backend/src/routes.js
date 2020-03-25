'use strict';

const express = require('express');

// Controllers
const OngController = require('../src/controllers/OngController');

const connection = require('./database/connection');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

module.exports = routes;