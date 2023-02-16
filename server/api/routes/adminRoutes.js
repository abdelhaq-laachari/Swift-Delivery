const express = require("express");
const router = express.Router();

// get function from admin controller
const {
  updateAdmin,
  getAdmin,
  register,
  login,
} = require("../controller/adminController");

// get function from client controller
const {
  getClients,
  totalClients,
} = require("../controller/clientController");

//  Protect all routes
const { protect } = require("../middleware/authMiddleware");

// admin routes
router.route("/login").post(login);
router.route("/register").post(register);
router.route("/update/:id").put(protect, updateAdmin);
router.route("/getAdmin").get(protect, getAdmin);

// Create route for client
router.route("/totalClients").get(protect, totalClients);
router.route("/getClients").get(protect, getClients);

// export route file
module.exports = router;
