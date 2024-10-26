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
    }
}

