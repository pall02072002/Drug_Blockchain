const express = require("express");
const indexRouter = express.Router();
const User = require("../models/user.model");

indexRouter.get("/getUser", async (req, res, next) => {
    let email = req.body.email;
    console.log(`Got the email: ${email} to find`);
    try {
        const user = await User.findOne({ email: email });
        console.log(user);
        res.status(200).json({
            status: true,
            user: user,
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
});

module.exports = indexRouter;
