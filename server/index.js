const express = require("express")
const dotenv = require("dotenv")

const app = express();

app.use(dotenv())

app.listen(process.env.PORT,()=>console.log('server running in port ',process.env.PORT))