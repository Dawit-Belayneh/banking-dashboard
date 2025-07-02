const express = require("express")
const AuthController = require("../../controller/AuthController")
const AuthValidation = require("../../validations/AuthValidation")
const ValidationMiddleware = require("../../middleware/ValidationMiddleware")
const router = express.Router()

router.route("/login")
.post(AuthController.loginUser)

router.route("/register")
.post(AuthValidation.registerUser,ValidationMiddleware,AuthController.registerUser)

module.exports= router