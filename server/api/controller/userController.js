const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// @desc    Register a new admin
// @route   POST /admin/register
// @access  Public

const register = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;

  //   check if any of the fields are empty
  if (!fullName || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  //   check if the admin already exists

  const userExists = await User.findOne({
    email: email.toLowerCase(),
  });
  if (userExists) {
    res.status(400);
    throw new Error("Email already exists");
  }

  // hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create admin
  const user = await User.create({
    fullName,
    email: email.toLowerCase(),
    password: hashedPassword,
  });

  //   if admin created send success message
  if (user) {
    res.status(201).json({
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Something went wrong");
  }
});

// @desc    Auth user & get token
// @route   POST /api/admin/login
// @access  Public

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    email: email.toLowerCase(),
  });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Get all users
// @route   GET /allUsers
// @access  Private

const getAllUsers = asyncHandler(async (req, res) => {
  const user = await User.find(
    {},
    { password: 0, token: 0, __v: 0, password2: 0 }
  );
  res.json(user);
});

// @desc    Get user profile
// @route   GET /user/profile
// @access  Private

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.send(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = {
  register,
  login,
  getAllUsers,
  getUserProfile,
};
