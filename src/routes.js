const express = require('express');
const route = express.Router();
const {listAllStudents, createStudent, listStudent, changeStudent, deleteStudent} = require('./controllers/studentsController');

route.get('/students', listAllStudents);
route.post('/students', createStudent);
route.get('/students/:id', listStudent);
route.put('/students/:id', changeStudent);
route.delete('/student', deleteStudent);

module.exports = route;