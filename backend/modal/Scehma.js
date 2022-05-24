const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: {type: String},
  description: {type: String},
  price: {type: Number},
  }
);
const Product = mongoose.model('products', productSchema);
module.exports = Product;