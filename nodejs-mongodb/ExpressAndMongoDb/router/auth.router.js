const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const secretKey = "SecretKeySecretKeySecretKeySecretKeySecretKey1234";

const options = {
    expiresIn: '1d',
};

router.post("/auth/login", async (req, res) => {
    const {email} = req.body;

    try {
        const users = await User.find({email: email});

        //res.send(users[0]);
        const payload = {
            name: users[0].name,
            email: users[0].email
        }

        const token = jwt.sign(payload,secretKey,options);

        res.json({accessToken: token});
    } catch (err) {
        res.status(400).json({message: err});
    }
});

const Product = require("../models/product");
const { query } = require("express");

router.get("/products", async (req, res)=>{
    const {pageNumber, pageSize} = req.query;
    // for (let i = 0; i < 200; i++) {
    //     let newProduct = new Product({
    //         name: "Product " + i
    //     });

    //     await newProduct.save();
    // }

    const totalPageCount = Math.ceil(await Product.count() / pageSize);

    const model = {
        data: await Product.find({})
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize),
        pageNumber: pageNumber,
        pageSize: pageSize,
        isFirstPage: pageNumber == 1 ? true : false,
        totalPageCount: totalPageCount,
        isLastPage: pageNumber == totalPageCount ? true : false
    }

    res.json(model);
});

module.exports = router;

