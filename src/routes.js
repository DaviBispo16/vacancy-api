const express = require('express');
const route = express.Router();
const {listAllStudents, createStudents} = require('./controllers/studentsController');

route.get('/students', listAllStudents);
route.post('/students', createStudents);


module.exports = route;