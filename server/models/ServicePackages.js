//import dependencies 
const mongoose = require('mongoose');
const { Schema } = mongoose;

const servicePackagesSchema = new Schema ({
  name: String,
  price: String,
  inStock: Boolean,
  currentlySold: Number,
  packagesInCart: Number,
  maxQuantity: Number
});

module.exports = mongoose.model("servicePackages", servicePackagesSchema);