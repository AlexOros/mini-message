const express = require("express");
const router = express.Router();
const messages = require("../public/javascripts/messages");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { messages, title: "Mini message board" });
});

module.exports = router;
