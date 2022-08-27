const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'mysql-database',
  user: 'root',
  password: 'root',
  database: 'nodedb',
});

module.exports = connection;