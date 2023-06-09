const express = require("express");
const app = express();
const dotEnv= require("dotenv");
dotEnv.config();
const multer  = require('multer');
const {storage}= require('./cloudinary/index');
const uploads = multer({ dest: "files/"});

//cloud storage
//const uploads = multer({ storage });
const mongoose = require("mongoose");
const Image = require("./models/image");

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true}));
//app.set('views', path.join(__dirname, '/views'))
app.use(express.json())

//const url= "mongodb+srv://shrunkhalaraut:D9QoQLb9zGiVi7sJ@cluster0.dwabuzw.mongodb.net/photonodedb"

//const connectionParams = {
 //   useNewUrlParser: true,    
 //   useUnifiedTopology: true    
//    }

mongoose.connect(url, connectionParams).then(() => {    
    console.log('connected to db')    
    }).catch(    
    console.log('error')    
    )

   
app.get("/", (req,res) =>{
    res.render("display");
});

app.get("/add", (req,res) =>{
    res.render("add");
})

app.post("/add",uploads.single("image"),(req,res)=>{
   // console.log("post here");
   const newImage = new Image(req.body)
   newImage.image.url = req.file.path;
   newImage.image.filename = req.file.filename;
   console.log(newImage);
   await newImage.save();
   res.redirect();
    console.log(req.body, req.file);
});

app.listen(5000, ()=> console.log("Server Started"));