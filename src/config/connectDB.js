// Use CommonJS syntax
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '68.178.145.111',
    user: 'tests',
    password: '3aEjQK8.R(MF',
    database: 'tests',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 60000, 
});

module.exports = connection;
