var express = require('express');
var router = express.Router();
var space  = require("../spaceModel");

router.post('/:id', function(req, res, next) {
  space.book(req.params.id);
  res.redirect('/spaces')
});

module.exports = router;
