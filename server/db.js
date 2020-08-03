require('dotenv').config()
const Pool = require("pg").Pool;

// SQL_ELEPHANT=postgres://zkhccldk:n-pSTAJ2oWoRUlLaekuGGpDvLUr7Bp37@ruby.db.elephantsql.com:5432/zkhccldk
// postgres://username:password@hostname/databasename


const pool = new Pool({
    user: process.env.USERNAME, //actually elephant???
    password: process.env.PASSWORD, //bring in from ENV
    host: process.env.HOSTNAME,
    port: 5432,
    database: process.env.DATABASENAME //will be users for users, etc          
});

module.exports = pool;