const mysql = require('mysql'),
    conn = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: 'goodies'
    });

conn.connect()

module.exports = conn