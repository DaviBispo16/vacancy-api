const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();


module.exports = {
    listAllStudents: async (req, res) => {
        try {
            const students = await prisma.student.findMany();
            return res.status(200).json(students);
        } catch (error) {
            return res.status(500).json({mensagem: `${error.message}`});
        }
    },

    createStudent: async (req, res) => {
        const {name, email, course_name} = req.body;
            try {
                if (!name) {
                    return res.status(400).json({ error: 'A propriedade name é obrigatória' });
                }
                const student = await prisma.student.create({
                data : {
                    name,
                    email,
                    course_name
                    }
                });
                return res.status(201).json(student);
    
            } catch (error) {
                return res.status(500).json({mensagem: `${error.message}`});
            }
        },
    

    listStudent: async (req, res) => {
        const {id} = req.params;
        try {
            const student = await prisma.student.findUnique({
                where: {
                    id
                }
            });    
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
            const updateUser = await prisma.student.update({
                where: {
                    id
                },
                data: {
                    name,
                    email,
                    course_name
                }
            })
            
            if (updateUser == undefined) {
                return res.status(404).json({ error: 'ID não encontrado' });
            } 
    
            res.json(updateUser);

        } catch(error) {
            return res.status(500).json({mensagem: `${error.message}`});
        }
    },

    deleteStudent: async(req, res) => {
        const {id} = req.body;
        try {
            const deleteStudent = await prisma.student.delete({
                where: {
                    id
                }
            })

            if (deleteStudent == undefined) {
                return res.status(404).json({ error: 'ID não encontrado' });
            } 

            return res.status(204).send();
            
        } catch (error) {
            return res.status(500).json({mensagem: `${error.message}`});
        }
    }


}