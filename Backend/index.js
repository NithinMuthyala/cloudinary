require("dotenv").config()
const mongoose = require("mongoose")
const express = require('express')

const app = express()
app.use(express.json())
const cors  = require("cors")

app.use(cors())
const fileRouter = require("./Views/fileop")
const file = require("./models/file")

mongoose.connect(process.env.data_base_link).then(() => {
    console.log('DB Connected')
    app.listen(port = process.env.port || 4030 , () => {
        console.log(`Server is Running at ${port}`)
    })
    }).catch((err) => {
        console.log(err)
    })


    app.use("/", fileRouter)