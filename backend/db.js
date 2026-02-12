const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "[{1Q@w3E$r;}]",
  database: "portfolio"
});

db.connect((err) => {
  if (err) {
    console.log("DB Error");
  } else {
    console.log("MySQL Connected");
  }
});

module.exports = db;