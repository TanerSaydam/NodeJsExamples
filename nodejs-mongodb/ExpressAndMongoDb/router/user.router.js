const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { v4:uuidv4}  = require("uuid");

//Http Post Endpoint
router.post("/api/users", async (req, res) => {
    const newUser = new User({
        _id: uuidv4(),
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    });

    try {
        const savedUser = await newUser.save(); 
        res.json(savedUser);
    } catch (error) {
        res.status(400).json({message: err.message});
    }
});

//Http Get Endpoint
router.get("/api/users", async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(400).json({message: err.message});
    }
});

module.exports = router;