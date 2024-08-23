const express = require("express");
const indexRouter = express.Router();

indexRouter.get("/", (req, res, next) => {
    res.send("respond with a resource");
});

module.exports = indexRouter;
