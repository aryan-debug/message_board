const { format } = require('date-fns');
var express = require('express');
var router = express.Router();

const messages = [
  {
    title: "Quote",
    message: "Any sufficiently advanced technology is indistinguishable from magic",
    user: "Arthur C. Clark",
    added: "1962"
  },
  {
    title: "Quote",
    message: "I know that I know nothing",
    user: "Socrates",
    added: "Long time ago"
  },
  {
    title: "Quote",
    message: "Intelligence is the ability to adapt to change",
    user: "Stephen Hawking",
    added: "1991"
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

module.exports = {
  indexRouter: router,
  messages: messages
}
