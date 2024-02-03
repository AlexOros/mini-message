var express = require("express");
var router = express.Router();
const messages = require("../public/javascripts/messages");

router.get("/", function (req, res, next) {
  res.render("new", { title: "New message" });
});

router.post("/", function (req, res, next) {
  const { text, user } = req.body;
  messages.push({
    text,
    user,
    dateAdded: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
