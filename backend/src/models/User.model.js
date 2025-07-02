const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lower:true,
        unique:true
    },
    password:{
        type:String,
        requierd:true,
    },
    ac_type:{
        type:String,
        required:true,
        enum:['saving','current'],
        default:'saving'
    }
},{
    timestamps:true
})

const model = mongoose.model("user", schema)

exports.userModel=model