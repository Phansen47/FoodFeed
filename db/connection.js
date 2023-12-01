// Connection.js
const mysql = require("mysql2");

// Creates mysql connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "econ388BYU",
  database: "recipe_db",
});

// Throws error if unable to connect
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database.");
});

module.exports = connection;
