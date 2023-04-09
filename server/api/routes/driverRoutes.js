const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

// import controller
const {register, login, getAlldrivers, getDriverProfile, getDriverById, searchDriverByCity} = require("../controller/driverController");

// @desc    Register a new driver
router.route("/register").post(register);

// @desc    Login a driver
router.route("/login").post(login);

// @desc    Get all drivers
router.route("/getAll").get(getAlldrivers);

// @desc    Get driver profile
router.route("/profile").get(protect ,getDriverProfile);

// @desc    Get driver by ID
router.route("/:id").get(getDriverById);

// @desc    Search driver by city
router.route("/search/:city").get(searchDriverByCity);



// export route file
module.exports = router;
