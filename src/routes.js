const express = require('express');
const route = express.Router();
const {listAllStudents, createStudent, listStudent, changeStudent} = require('./controllers/studentsController');

route.get('/students', listAllStudents);
route.post('/students', createStudent);
route.get('/students/:id', listStudent);
route.put('/students/:id', changeStudent);

module.exports = route;