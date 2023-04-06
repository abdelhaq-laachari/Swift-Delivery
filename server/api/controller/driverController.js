const asyncHandler = require("express-async-handler");
const Driver = require("../models/driverModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// @desc    Register a new admin
// @route   POST /admin/register
// @access  Public

const register = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    phone,
    address,
    city,
    country,
    zipCode,
  } = req.body;

  //   check if any of the fields are empty
  if (
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !phone ||
    !address ||
    !city ||
    !country ||
    !zipCode
  ) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  //   check if the admin already exists

  const userExists = await Driver.findOne({
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
  const user = await Driver.create({
    firstName,
    lastName,
    phone,
    address,
    city,
    country,
    zipCode,
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
  const user = await Driver.findOne({
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

const getAlldrivers = asyncHandler(async (req, res) => {
  const user = await Driver.find(
    {},
    { password: 0, token: 0, __v: 0, password2: 0 }
  );
  res.json(user);
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
  getAlldrivers,
};
