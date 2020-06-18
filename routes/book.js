var express = require('express');
var router = express.Router();
var space = require('../spaceModel');
const { client } = require('../dbConfig');

router.post('/:id', function (req, res, next) {
  space.book(req.params.id);
  console.log('POST');
  res.redirect('/book/' + req.params.id);
});

router.get('/:id', function (req, res, next) {
  var book_dates = client.query('SELECT dates FROM spaces WHERE id = $1', [17]);
  console.log(book_dates);
  res.render('bookingpage', { dates: book_dates });
});

module.exports = router;
