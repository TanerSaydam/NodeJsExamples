const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.get("/products", async (req, res)=>{
    for (let i = 0; i < 200; i++) {
        let newProduct = new Product({
            name: "Product " + i
        });

        await newProduct.save();
    }

    const products = await Product.find({});
    res.json(products);
});

exports.module = router;
