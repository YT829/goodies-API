const mysql = require("mysql"),
  conn = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "database123",
    database: "ntutdb",
  });

conn.connect();

module.exports = conn;
