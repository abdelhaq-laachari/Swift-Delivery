const express = require("express"); // Import express
const { register, login } = require("../controller/clientController");
const { checkClient } = require("../middleware/checkAuth");
const router = express.Router(); // Create a router


// @desc    Register a new client
router.route("/register").post(register);

// @desc    Login client
router.route("/login").post(login);

// @desc    Check if client is logged in
router.route("/checkAuth").get(checkClient);



// export route file
module.exports = router;
