const cloudinary = require('cloudinary').v2;
const {cloudinaryStorage} = require("multer-storage-cloudinary")
const dotEnv = require("dotenv");
dotEnv.config();

cloudinary.config({
    cloud_name:`${process.env.Cloud_Name}`,
    api_key: `${process.env.API_KEY}`,
    api_secret: `${process.env.API_SECRET}`,
});

const storage= new cloudinaryStorage({
    cloudinary,
    params:{
        folder:'example',
        allowedFormats: ['jpeg','jpg', 'png']
    },
});

module.exports ={cloudinary, storage};