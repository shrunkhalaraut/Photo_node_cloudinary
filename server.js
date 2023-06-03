const express = require("express");
const app = express();
const dotEnv= require("dotenv");
dotEnv.config();
const multer  = require('multer');
const uploads = multer({ dest: "files/"});

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true}));

app.get("/", (req,res) =>{
    res.render("display");
});

app.get("/add", (req,res) =>{
    res.render("add");
})

app.post("/add",(req,res)=>{
   // console.log("post here");
    console.log(req.body, req.file);
});

app.listen(5000, ()=> console.log("Server Started"));