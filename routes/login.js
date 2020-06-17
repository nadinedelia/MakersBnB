var express = require('express');
var router = express.Router();
var auth  = require("../checkLogin");
var flash = require('express-flash-messages')
var session = require('express-session')

/* GET login page. */
router.use((req, res, next) => {
  res.locals.flashMessages = req.flash();
  next();
});

router.get('/', function(req, res, next) {
  req.flash('notify', 'This is a test notification.');
  res.render('login', { title: 'Login to MakersBnB' });
});

router.post('/', (req, res) => {

auth.checkLogin(req.body.username, req.body.password, res);
});

module.exports = router;
