const mongoose = require("mongoose");

const driverSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter your first name"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter your last name"],
  },
  phone: {
    type: String,
    required: [true, "Please enter your phone number"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
  },
  address: {
    type: String,
    required: [true, "Please enter your address"],
  },
  city: {
    type: String,
    required: [true, "Please enter your city"],
  },
  country: {
    type: String,
    required: [true, "Please enter your country"],
  },
  zipCode: {
    type: String,
    required: [true, "Please enter your zip code"],
  },
});

module.exports = mongoose.model("Driver", driverSchema);
