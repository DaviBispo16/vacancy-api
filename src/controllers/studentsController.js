const {findAll, create} = require('../repositories/studentsReposity');

module.exports = {
    listAllStudents: (req, res) => {
        try {
            return res.status(200).json(findAll());
        } catch (error) {
            return res.status(500).json({mensagem: `${error.message}`});
        }
    },

    createStudents: async (req, res) => {
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
    

    
}