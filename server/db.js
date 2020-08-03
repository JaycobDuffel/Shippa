
const Pool = require("pg").Pool;

// SQL_ELEPHANT=postgres://zkhccldk:n-pSTAJ2oWoRUlLaekuGGpDvLUr7Bp37@ruby.db.elephantsql.com:5432/zkhccldk
// postgres://username:password@hostname/databasename


const pool = new Pool({
    user: "zkhccldk", //actually elephant???
    password: "n-pSTAJ2oWoRUlLaekuGGpDvLUr7Bp37", //bring in from ENV
    host: "ruby.db.elephantsql.com",
    port: 5432,
    database: "zkhccldk" //will be users for users, etc
});

module.exports = pool;