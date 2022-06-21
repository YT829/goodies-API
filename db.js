const mysql = require('mysql'),
  conn = mysql.createConnection({
    host: "database-1.csuiotammurw.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "admin",
    password: "masterpassword11",
    database: 'ntutsystemAWS'
  });

conn.connect()

module.exports = conn