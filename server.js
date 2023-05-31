const express = require("express");
const app = express();
const dotEnv= require("dotenv");
dotEnv.config();


app.listen(5000, ()=> console.log("Server Started"));