var express = require('express');
var router = express.Router();
var space  = require("../spaceModel");

router.get('/', function(req, res, next) {
  space.getSpaces(req.session.user).then(function(spaces) {
    res.render('spaces', {
      title: 'MakersBnB',
      name: req.session.firstName,
      spaces: spaces.rows
    })
  })
});

module.exports = router;
