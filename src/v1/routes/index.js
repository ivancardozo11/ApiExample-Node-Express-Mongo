const { application } = require("express");
const express = require("express");

const router = express.Router();

router
.route("/")
.get((req, res) =>{
    res.send(`<h1>Hello world! ${req.baseUrl} </h1>`);
});

module.exports = routes;