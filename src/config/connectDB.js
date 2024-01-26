const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    //password: 'Test@@##$12',
    database: 'test'
});
   // "start": "pm2 start src/server.js"

export default connection;