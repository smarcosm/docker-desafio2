const express = require("express");
const app = express();

const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};
const mysql = require("mysql");
const con = mysql.createConnection(config);

const createTable =
  "CREATE TABLE IF NOT EXISTS people (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))";
const sql = "INSERT INTO people(name) VALUES ('João'),('Maria'),('Pedro'),('Omar')";
const select = "SELECT * FROM people";

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  con.query(createTable, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

app.get("/", (req, res) => {
  {
    con.query(select, function (err, result, fields) {
      res.send(
        `<h1>Full Cycle Rocks!</h1>
        <h2>Lista de nomes cadastrado no banco de dados.</h2>
        <table>
          <tr>
            <th>ID</th>
            <th>NOME</th>
          </tr>
          <tr>
            ${
              !!result.length
                ? result
                    .map(
                      (el) => `<tr><td>${el.id}</td><td>${el.name}</td></tr>`
                    )
                    .join(" ")
                : ""
            }
          </tr>
        </table>
      `
      );
    });
  }
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});
