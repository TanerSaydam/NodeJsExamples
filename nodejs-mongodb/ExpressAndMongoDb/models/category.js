const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    _id: String,
    name: String
});

const Category = mongoose.model("Category", categorySchema);



module.exports = Category;