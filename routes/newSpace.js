var express = require('express');
var router = express.Router();
var space  = require("../addSpace");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('newSpace', { title: 'MakersBnB' });
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  space.spaceAdd(req.body);
  res.redirect('/space')
});

module.exports = router;
