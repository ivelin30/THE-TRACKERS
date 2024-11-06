const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();

//Importing schema
require("../models/UsersModel");
const User = mongoose.model("users");

router.get('/' , async (req, res) => {
    const username = req.query.username;
    const password = req.query.password;
    try {
        const users = await User.find({});
        if (users[0].username === username && users[0].password === password) {
            return res.status(200).json({
                success: true,
            });
        }else{
            return res.status(200).json({
                success: false, 
            })
        }
        
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;