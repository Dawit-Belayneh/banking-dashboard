const { userModel } = require("../models/User.model")
const ApiError = require("../utils/apierror")
const bcryptjs = require("bcryptjs")

class AuthService{
    static async loginUser(body){
       

        const {email,password} = body
        const check_exist = await userModel.findOne({email}) 
        if(!check_exist){
            throw new ApiError(400,"No Account Found")
        }
        const isMatch = await bcryptjs.compare(password,check_exist.password)
        if(!isMatch){
            throw new ApiError(400,"Invalid Credentials")
        }

        return{
            msg:"Login Success",
            "token":"123"
        }
    }

    static async registerUser(body){
        const {name,email,password,ac_type} = body

        const check_exist = await userModel.findOne({email: email.toLowerCase()})
        if(check_exist){
            throw new ApiError(400,"Email Already Exist")
        }

            const user = await userModel.create({
               name,email,password,ac_type 
            })

             return{
            msg:"Register Success",
            "token":"123"
        }
    }
}

module.exports = AuthService