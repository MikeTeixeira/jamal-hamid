//import dependencies 
const mongoose = require('mongoose');
const { Schema } = mongoose;

const servicePackagesSchema = new Schema ({
  name: String,
  price: String,
  status: Boolean,
  quantity: Number
});

module.exports = mongoose.model("servicePackages", servicePackagesSchema);