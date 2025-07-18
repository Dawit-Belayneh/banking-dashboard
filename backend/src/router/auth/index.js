const express = require("express")
const AuthController = require("../../controller/AuthController")
const AuthValidation = require("../../validations/AuthValidation")
const ValidationMiddleware = require("../../middleware/ValidationMiddleware")
const router = express.Router()
const AuthMiddleware = require("../../middleware/AuthMiddleware");

router.route("/login")
.post(AuthValidation.loginUser,ValidationMiddleware,AuthController.loginUser)

router.route("/register")
.post(AuthValidation.registerUser,ValidationMiddleware,AuthController.registerUser)


router.route("/profile")
.get(AuthMiddleware,AuthController.profileUser)

module.exports= router