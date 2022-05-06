const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const db = require("./database");
const errorHandling = require("./middleware/errorHandling.js")

const app = express();

db.hasConnection();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errorHandling)

app.listen(4000, () => console.log("Servidor rodando na porta 4000"));