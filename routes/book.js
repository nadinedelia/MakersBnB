var express = require('express');
var router = express.Router();
var space = require('../spaceModel');

router.post('/:id', function (req, res, next) {
  space.book(req.params.id);
  console.log('POST');
  res.redirect('/' + req.params.id);
});

router.get('/:id', function (req, res, next) {
  // var dates = client.query('SELECT dates FROM spaces WHERE id = $1', [17]);
  console.log('this point');
  // res.render('dates', { dates: '11th' });
});

module.exports = router;
