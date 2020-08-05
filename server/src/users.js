// server database connection logic here for users.

const env = require('dotenv').config();
const pg = require('pg');
const conString = 'postgres://zkhccldk:n-pSTAJ2oWoRUlLaekuGGpDvLUr7Bp37@ruby.db.elephantsql.com:5432/zkhccldk'
const client = new pg.Client(conString);

client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT * FROM users', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows);
    client.end();
  });
});
 
