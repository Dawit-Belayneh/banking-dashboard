const { userModel } = require("../models/User.model")

class AuthService{
    static loginUser(body){
        return{
            msg:"Login Route"
        }
    }

    static async registerUser(body){
        const {name,email,password,ac_type} = body

        const check_exist = await userModel.findOne({email:toLowercse()})
        if(check_exist){
            throw new ApiError(400,"Email Already Exist")
        }

            const user = await userModel.create({
               name,email,password,ac_type 
            })

            return user
    }
}

module.exports = AuthService