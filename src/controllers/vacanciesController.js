const {findAll} = require('../repositories/vacanciesRepository');

module.exports = {
    listAllVacancies: (req, res) => {
        res.status(200).json(findAll());
    }
}