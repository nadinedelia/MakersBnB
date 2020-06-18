var express = require('express');
var router = express.Router();
var space = require('../spaceModel');
const { client } = require('../dbConfig');

router.post('/', function (req, res, next) {
  // space.book(req.params.id);
  console.log('POST');
  res.redirect('/book');
});

router.get('/', function (req, res, next) {
  console.log(req.params.id, 5)
  space.getDates(req.params.id).then( function(space_data)
  { console.log(space_data, 1)
    res.render('bookingpage', { dates: space_data }); })
});

module.exports = router;
