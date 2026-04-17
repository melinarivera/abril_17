const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hola compañeros y profesor, hoy es viernes");
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});

const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.error("Error Mongo:", err));