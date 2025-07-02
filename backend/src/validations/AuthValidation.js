const {body} = require("express-validator")

class AuthValidation{
    static registerUser=[
        body("name").notEmpty().withMessage("Name is Required"),
        body("email").notEmpty().withMessage("Email is Required"),
        body("password").notEmpty().withMessage("password is Required"),
        body("ac_type").notEmpty().withMessage("Account Type is Required").isIn(['saving','current']).withMessage("account should be a valid saving, or current")
    ]
} 

module.exports= AuthValidation