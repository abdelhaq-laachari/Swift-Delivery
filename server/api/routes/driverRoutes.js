const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

// import controller
const {register, login, getAlldrivers, getDriverProfile} = require("../controller/driverController");

// @desc    Register a new driver
router.route("/register").post(register);

// @desc    Login a driver
router.route("/login").post(login);

// @desc    Get all drivers
router.route("/").get(getAlldrivers);

// @desc    Get driver profile
router.route("/profile").get(protect ,getDriverProfile);



// export route file
module.exports = router;
