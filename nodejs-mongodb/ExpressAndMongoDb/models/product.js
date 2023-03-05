const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    categoryId: String,
    name: String
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;