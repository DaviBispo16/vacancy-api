const {findAll, create, findById, deleteById} = require('../repositories/studentsReposity');

module.exports = {
    listAllStudents: (req, res) => {
        try {
            return res.status(200).json(findAll());
        } catch (error) {
            return res.status(500).json({mensagem: `${error.message}`});
        }
    },

    createStudent: async (req, res) => {
        const {name, email, course_name} = req.body;
            try {
                if (!name) {
                    return res.status(400).json({ error: 'Nome é obrigatório' });
                }
                const student = await create(name, email, course_name);
                return res.status(201).json({
                    data: student
                });
    
            } catch (error) {
                return res.status(500).json({mensagem: `${error.message}`});
            }
        },
    

    listStudent: async (req, res) => {
        const {id} = req.params;
        try {
            const student = findById(id);    
            if (student == undefined) {
                return res.status(404).json({ error: 'ID não encontrado' });
            }
            res.status(200).json({data: student})

        } catch (error) {
            return res.status(500).json({mensagem: `${error.message}`});

        }
    },

    changeStudent: async(req, res) => {
        const {id} = req.params;
        const {name, email, course_name} = req.body;
        try {
            const student = findById(id);
            if (student == undefined) {
                return res.status(404).json({ error: 'ID não encontrado' });
            } 

            if (!name) {
                return res.status(400).json({ error: 'Nome é obrigatório' });
            }
       
            student.name = name;
            student.email = email;
            student.course_name = course_name;
            res.json({data: student});

        } catch(error) {
            return res.status(500).json({mensagem: `${error.message}`});
        }
    },

    deleteStudent: async(req, res) => {
        const {id} = req.body;
        try {
            if (!id) {
                return res.status(400).json({ error: 'ID é obrigatório' });
            }
            const student = findById(id);
            if (student == undefined) {
                return res.status(404).json({ error: 'ID não encontrado' });
            } 

            const removeStudent = deleteById(id);
            return res.status(204).send();
            
        } catch (error) {
            return res.status(500).json({mensagem: `${error.message}`});
        }
    }


}