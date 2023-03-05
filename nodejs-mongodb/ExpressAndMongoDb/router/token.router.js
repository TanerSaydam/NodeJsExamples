const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const payload = {
    id:1234,
    username:"Taner Saydam"
}

const secretKey = "SecretKeySecretKeySecretKeySecretKeySecretKey1234";

const options = {
    expiresIn: '1h',
};

router.get("/token", async (req, res) =>{
    try {
        const token = jwt.sign(payload,secretKey,options);
        res.json(token);
    } catch (err) {
        res.status(400).json({message: err});
    }
});

module.exports = router;
