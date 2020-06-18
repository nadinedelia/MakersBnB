var express = require('express');
var router = express.Router();
const { client } = require('../dbConfig');
var user = require('../addUsers');

/* GET signup page. */
router.get('/', function (req, res, next) {
  console.log(req.sessions);
  res.render('signup', { title: 'MakersBnB' });
});

router.post('/', (req, res) => {
  console.log(req.sessions)
  user.getName(
    req.body.first_name,
    req.body.last_name,
    req.body.email,
    req.body.username,
    req.body.password
  ).then( function(user_data) {
    //console.log(req.sessions)
    req.sessions.user = user_data.id;
    res.redirect('/spaces');
  })
});

module.exports = router;
