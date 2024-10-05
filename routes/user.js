const express = require("express")
const {handleUserSignup,handleUserLoginIn} = require("../controllers/user")

const router = express.Router();

router.post("/",handleUserSignup)
router.post("/login",handleUserLoginIn)
module.exports = router