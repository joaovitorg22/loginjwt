import express from "express";
import connection from "./bd/conexaomysql.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const app = express();


app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});


app.listen(3000,);