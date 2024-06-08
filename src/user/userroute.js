const express = require('express')
const controller= require('./usercontroller.js')
const router = express.Router();


router.post("/SignUp", controller.CreateUser)
router.get("/SignedIn",controller.GetUser)
router.post("/Otp",controller.VerifiedUser)
module.exports=router