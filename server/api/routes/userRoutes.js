const express = require("express");
const router = express.Router();

// import controller
const {register, login, getAllUsers, getUserProfile} = require("../controller/userController");
const { protectUser } = require("../middleware/authMiddleware");

// @desc    Register a new user
router.route("/register").post(register);

// @desc    Login a user
router.route("/login").post(login);

// @desc    Get all companies
router.route("/").get(getAllUsers);

// @desc    Get user profile
router.route("/profile").get(protectUser, getUserProfile);



// export route file
module.exports = router;
