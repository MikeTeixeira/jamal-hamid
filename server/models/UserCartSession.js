const mongoose = require('mongoose');
const { Schema } = mongoose;

const userCartSession = new Schema({
  name: String,
  price: String,
  quantity: Number,
  status: Boolean,
  sessionId: String
});

module.exports = mongoose.model("userCartSession", userCartSession);