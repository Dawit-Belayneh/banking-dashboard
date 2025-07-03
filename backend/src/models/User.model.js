const mongoose = require("mongoose")
const bcryptjs = require("bcryptjs")

const schema = new mongoose.Schema({
    name:{
        type:String,
        requierd:true,
        trim:true
    },
    email:{
        type:String,
        requierd:true,
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
        requierd:true,
        enum:['saving','current'],
        default:'saving'
    }
},{
    timestamps:true
})


schema.pre("save", async function(next) {
    const user = this;
    if(user.isModified("password")){
        this.password =  await bcryptjs.hash(user.password,10)
    }
    next()
})
const model = mongoose.model("user", schema)

exports.userModel=model