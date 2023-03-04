const mongoose = require("mongoose");

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
