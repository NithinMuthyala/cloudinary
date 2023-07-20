const express = require("express")
const formidableMiddleware = require('express-formidable');

// const multer = require("multer")
const fileRouter = express.Router()

const cloudinary = require('cloudinary').v2 

cloudinary.config({
    api_key: process.env.CLOUDINARY_API_KEY, 
    cloud_name :process.env.CLOUDINARY_CLOUD_NAME,
    api_secret : process.env.CLOUDINARY_API_SECRET
})


fileRouter.post("/" ,formidableMiddleware() ,async (req , res) => {
    // console.log(req.files.file.path)
   try {const image = await cloudinary.uploader.upload(
        req.files.file.path
    )
    console.log(image)}
    catch(err){
        console.log(err)
    }
})

module.exports = fileRouter