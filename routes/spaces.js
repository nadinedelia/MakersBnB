var express = require('express');
var router = express.Router();
var space  = require("../spaceModel");

/* GET users listing. */
router.get('/', function(req, res, next) {
  var spaces

  spaces = space.list()
  console.log(spaces)

  res.render('spaces', {
    title: 'MakersBnB',
    spaces: spaces
  });

});



module.exports = router;
