const mongoose = require("mongoose")

const filedata = mongoose.Schema({
        imageurl: {
            type:String
        } 
})

module.exports = mongoose.model("filedata",filedata)