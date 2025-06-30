const {userRegister,userProfile ,userLogin}= require("../controllers/userController");
const express = require("express");
const router= express.Router();

router.post("/register",userRegister);
router.post("/login",userLogin);
router.get("/profile",userProfile);

module.exports = router;