const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const uri = "mongodb+srv://tsaydam:1@testdb.al972pq.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("MongoDb bağlantısı başarılı!");
})
.catch((err) => {
    console.log("MongoDb bağlantı hatası: " + err.message);
});

const userSchema = new mongoose.Schema({
    _id: String,
    name: String,
    email: String,
    age: Number,
    isActive: Boolean,
    createdDate: Date
});

const User = mongoose.model("User", userSchema);

const newUser = new User({
    _id: uuidv4(),
    name: "Taner Saydam",
    email: "tanersaydam@gmail.com",
    age: 34,
    isActive: true,
    createdDate: new Date()
});

newUser.save()
.then((res) => console.log(res))
.catch (err => console.error("Yeni kullanıcı eklenirken hata oluştu: " + err));

