const exress = require("express");
const router = exress.Router();
const Category = require("../models/category");
const {v4:uuidv4} = require("uuid");

router.get("/categories", async (req, res)=>{
    var result = await Category.aggregate([
        {
            $lookup:{
                from : "products",
                localField: "_id",
                foreignField: "categoryId",
                as: "products"
            }
        }
    ])

    res.json(result);
})

module.exports = router;