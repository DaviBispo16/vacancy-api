const { v4: uuidv4 } = require('uuid');

let students = [];

module.exports = {
    findAll() {
        return students;
    },

    create(name, email, course_name) {
        const student = {
            id: uuidv4(),
            name, 
            email, 
            course_name
        }
        students.push(student);
        return student;
    },

    findById(id) {
        const student = students.find(student => student.id == id);
        return student;
    },

    deleteById(id) {
        students = students.filter(student => student.id !== id);
        return true;
    }
}

