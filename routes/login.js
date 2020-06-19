var express = require('express');
var router = express.Router();
var auth = require('../checkLogin');
var flash = require('express-flash-messages');
var session = require('express-session');

/* GET login page. */

router.get('/', function (req, res, next) {
  res.render('login', { title: 'Login to MakersBnB' });
});

router.post('/', (req, res) => {
  auth
    .checkLogin(req.body.username, req.body.password, res)
    .then(function (data) {
      console.log(data.rows[0], 1);
      
      if (data.rows.length === 1) {
        req.session.user = data.rows[0].id;
        req.session.firstName = data.rows[0].first_name;
        res.redirect('/spaces');
      } else {
        res.redirect('/login');
      }
    });
});

module.exports = router;
