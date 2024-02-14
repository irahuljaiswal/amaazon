const mongoose = require("mongoose")

const productsSchema = new mongoose.Schema({
  id: Number,
  img: String,
  detail: String,
  price: Number,
  off: String,
  rating: Number,
});

const Products = new mongoose.model("products", productsSchema);

module.exports = Products