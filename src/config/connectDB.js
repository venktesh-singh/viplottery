const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '127.0.0.1:3306',
    user: 'u257446660_test',
    password: 'Test@@##$12',
    database: 'u257446660_test'
});
   // "start": "pm2 start src/server.js"

export default connection;
