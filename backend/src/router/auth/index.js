const express = require("express")
const AuthController = require("../../controller/AuthController")
const router = express.Router()

router.route("/login")
.post(AuthController.loginUser)

router.route("/register")
.post(AuthController.registerUser)

module.exports= router