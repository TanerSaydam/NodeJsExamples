const express = require("express");
const Category = require("../models/category");
const router = express.Router();
const Product = require("../models/product");


router.get("/products", async (req, res)=>{

    const result = await Product.aggregate([
        {
            $lookup: {
                from: "categories",
                localField: "categoryId",
                foreignField: "_id",
                as: "category"
              }
        }
    ]);

    res.json(result);
    
})

module.exports = router;