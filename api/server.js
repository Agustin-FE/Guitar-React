const express = require('express');
const app = express();
const routes = require('./routes/index')
const cors = require("cors")
const db = require("./models/index");
const morgan = require("morgan");
const volleyball = require('volleyball');

app.use(volleyball)
app.use(express.json())
app.use(cors())
app.use(morgan("tiny"));

app.use("/api", routes)


db.sync({ force: false }).then(() => {
    app.listen(3001, () => {
      console.log("Escuchando en puerto 3001");
    });
  });