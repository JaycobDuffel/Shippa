const pg = require('pg');
//or native libpq bindings
//const pg = require('pg').native

const conString = "postgres://zkhccldk:n-pSTAJ2oWoRUlLaekuGGpDvLUr7Bp37@ruby.db.elephantsql.com:5432/zkhccldk" //Can be found in the Details page
const client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT * FROM users', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0]);
    client.end();
  });
});

module.exports = { client };