var express = require('express');
var router = express.Router();
var space  = require("../spaceModel");

router.get('/', function(req, res, next) {
  space.getSpaces().then(function(spaces) {
    res.render('spaces', {
      title: 'MakersBnB',
      spaces: spaces.rows
    })
  })
});

module.exports = router;
