const mongoose = require('mongoose')

const blogdetails = new mongoose.Schema({

    email:{
        type:String,
        required:true
    },
    domain:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    data:{
        type:String,
        required:true
    }
})

const details =  mongoose.model('BlogDetails',blogdetails)
module.exports = details
