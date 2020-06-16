var express = require('express');
var router = express.Router();
var space  = require("../spaceModel");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('newSpace', { title: 'MakersBnB' });
});

router.post('/', function(req, res, next) {
  space.add(req.body.name);
  res.redirect('/space')
});

module.exports = router;
