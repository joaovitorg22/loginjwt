import express from "express";
import mysql from "mysql2";

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456789",
  database: "awslogin",
}); 


app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});



app.listen(3000,);