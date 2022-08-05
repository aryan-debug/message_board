const { format } = require("date-fns");
var express = require("express");
const { messages } = require(".");
var router = express.Router();

router.get("/", function (req, res, next) {
    res.render("form")
})

router.post("/", function (req, res) {
    const formatted_date = format(new Date(), "PPp")
    req.body.added = formatted_date
    messages.push(req.body)
    res.redirect("/")
})

module.exports = router