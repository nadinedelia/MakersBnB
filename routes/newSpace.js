var express = require('express');
var router = express.Router();
var space  = require("../spaceModel");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('newSpace', { title: 'MakersBnB' });
});

router.post('/', function(req, res, next) {
  space.add(req.body, req.session.user);
  res.redirect('/spaces')
});

module.exports = router;
