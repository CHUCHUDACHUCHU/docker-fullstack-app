const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'express-database.cnw5mtlwmjco.ap-northeast-2.rds.amazonaws.com',
    user: 'root',
    password: 'daew09070515',
    database: 'myapp',
    port: 3306,
});

exports.pool = pool;
