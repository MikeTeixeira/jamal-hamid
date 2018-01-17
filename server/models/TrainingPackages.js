//import dependencies 
const mongoose = require('mongoose');
const { Schema } = mongoose;

const trainingPackagesSchema = new Schema ({
  name: String,
  price: String,
  status: Boolean,
  quantity: Number,
});

module.exports = mongoose.model("trainingPackages", trainingPackagesSchema);