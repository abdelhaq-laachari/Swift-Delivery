const express = require("express");
const router = express.Router();

// import middleware
const { protect } = require("../middleware/authMiddleware");

// import controller
const {register, login, getMe} = require("../controller/adminController");
const { checkAdmin } = require("../middleware/checkAuth");

// @desc    Register a new admin
router.route("/register").post(register);

// @desc    Login a admin
router.route("/login").post(login);

// @desc    Get me
router.route("/me").get(protect, getMe);

// check if admin is authorized
router.route("/checkAuth").get(checkAdmin)



// export route file
module.exports = router;
