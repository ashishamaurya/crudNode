const Pool = require("pg").Pool;
const pool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'DEMO',
    password: 'root',
    port: 5432
});

const ResponseClass = require("./model/response") // opsional


const getStudents = (request, response) => {
    var responseReturn = new ResponseClass();
    pool.query('call getStudenetList()', (error, results) => {
        if (error) {
            throw error
        }

        responseReturn.status = true;
        responseReturn.code = 200;
        responseReturn.message = "Success";
        responseReturn.data = results.rows;

        response.status(200).json(responseReturn);
    })
}

module.exports = {
    getStudents
}