const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "loginpage",
});
db.connect(() => {
  console.log("connect done");
});

module.exports = db;
