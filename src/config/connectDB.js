const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '0.0.0.0',
    user: 'u257446660_test',
    password: 'Test@@##$12',
    database: 'u257446660_test',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 30000, 
});
   // "start": "pm2 start src/server.js"

export default connection;
