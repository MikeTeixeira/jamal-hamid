const mongoose = require('mongoose');
const { Schema } = mongoose;
const ServicePackages = require('../models/ServicePackages');

const userCartSession = new Schema({
  name: String,
  price: String,
  quantity: Number,
  status: Boolean,
  packageId: String,
  sessionId: String
});

module.exports = mongoose.model("userCartSession", userCartSession);