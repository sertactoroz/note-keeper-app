const Pool = require('pg').Pool;
const pool = new Pool({
    user:"postgres",
    host: "localhost",
    database:"notes",
    password:"test",
    port: 5432,
})

module.exports = pool;

