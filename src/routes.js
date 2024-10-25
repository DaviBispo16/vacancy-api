const express = require('express');
const route = express.Router();
const {listAllVacancies} = require('./controllers/vacanciesController');

route.get('/vacancies', listAllVacancies);


module.exports = route;