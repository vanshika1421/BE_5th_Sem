const express=require("express");
const router = express.Router();
const { postLogin } = require("../Controller/authController");
router.post("/login",postLogin);
module.exports=router;