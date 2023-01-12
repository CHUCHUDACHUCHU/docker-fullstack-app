const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "mysql",
  user: "root",
  password: "daew09070515",
  database: "myapp",
});

exports.pool = pool;
