const express = require("express");
const dotenv = require("dotenv");
const { Connect } = require("./src/config/databse");


dotenv.config();

const port = process.env.PORT;
const app = express();



function server() {
  app.listen(port, () => console.log("server running in port ", port));
}

Connect(server)