const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const uri = require("../connection").uri;

const userRouter = require("./router/user.router");
const mailRouter = require("./router/mail.router");
const tokenRouter = require("./router/token.router");
const auhtRouter = require("./router/auth.router");
const productRouter = require("./router/product.router");
const categoryRouter = require("./router/category.router");

//Body parser middleware
app.use(express.json());

//Cors Middleware
app.use(cors());


//MongoDb Bağlantısı
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDb veritabanı bağlantısı başarılı"))
.catch((err) => console.log("MongoDb bağlantı hatası: " + err));


//Users Endpoints
app.use("/", userRouter);
//Mails Endpoints
app.use("/", mailRouter);
//Token Endpoints
app.use("/api/", tokenRouter);
//Auth Endpoints
app.use("/api/", auhtRouter);
//Product Endpoints
app.use("/api/", productRouter);
//Category Endpoints
app.use("/api/", categoryRouter);

//Server'ı dinlemeye başla
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Sunucu çalışıyor..."))

