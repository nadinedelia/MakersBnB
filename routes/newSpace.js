var express = require('express');
var router = express.Router();
var space  = require("../spaceModel");

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.session, 'new, get')
  res.render('newSpace', { title: 'MakersBnB' });
});

router.post('/', function(req, res, next) {
  console.log(req.session, 'new, post')
  space.add(req.body, req.session.user);
  res.redirect('/spaces')
});

module.exports = router;
