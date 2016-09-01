"use strict"

const express = require("express");

const app = express();

app.use(express.static("static"));

app.get("/api", function(req, res) {
    setTimeout(function() {
        res.json("result");
    }, 10000);
});

app.listen(3000, function() {
    console.log("listening on localhost:3000");
});