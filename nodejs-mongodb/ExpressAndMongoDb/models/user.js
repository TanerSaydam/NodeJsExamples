const mongoose = require("mongoose");

//Kullanıcı şeması ve model
const userSchema = new mongoose.Schema({
    _id: String,
    name: String,
    email: String,
    age: Number,
    image: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;