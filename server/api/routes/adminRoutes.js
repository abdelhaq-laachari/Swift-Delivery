const express = require("express");
const router = express.Router();
const { register, login } = require("../controller/adminController");
const { totalClients } = require("../controller/clientController");
const { checkAdmin } = require("../middleware/checkAuth");


// @desc    Register a new admin
router.route("/register").post(register)

// @desc    Login admin
router.route("/login").post(login)

// @desc    Check if admin is logged in
router.route("/checkAuth").get(checkAdmin)


// @desc    Get total clients
router.route("/totalClients").get(totalClients);

// export route file
module.exports = router;