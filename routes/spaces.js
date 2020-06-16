var express = require('express');
var router = express.Router();
var space  = require("../spaceModel");

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(space.list())

  res.render('spaces', { 
    title: 'MakersBnB',
    spaces: space.list()
  });
});



module.exports = router;
