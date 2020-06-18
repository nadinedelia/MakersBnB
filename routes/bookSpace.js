var express = require('express');
var router = express.Router();
var space = require('../spaceModel');

router.post('/:id', function (req, res, next) {
  // console.log(req.params);
  console.log(space.booking(req.params.id));
  space.book(req.params.id);

  res.redirect('/spaces');
});

module.exports = router;
