const express = require("express");
const router = express.Router();

// import controller
const {register, login, getAlldrivers} = require("../controller/driverController");

// @desc    Register a new user
router.route("/register").post(register);

// @desc    Login a user
router.route("/login").post(login);

// @desc    Get all companies
router.route("/").get(getAlldrivers);



// export route file
module.exports = router;
