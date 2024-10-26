const express = require('express');
const route = express.Router();
const {listAllStudents, createStudents, listStudent} = require('./controllers/studentsController');

route.get('/students', listAllStudents);
route.post('/students', createStudents);
route.get('/students/:id', listStudent);

module.exports = route;