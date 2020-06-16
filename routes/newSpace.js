var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('newSpace', { title: 'MakersBnB' });
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  res.redirect('/space')
});

module.exports = router;
