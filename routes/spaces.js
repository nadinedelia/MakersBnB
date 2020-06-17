var express = require('express');
var router = express.Router();
var space  = require("../spaceModel");

router.get('/', function(req, res, next) {
  
  // const {Client} = require('pg')
  // const client = new Client({
  //   database: 'testdb',
  // });

  // async function getSpaces() {
  //   await client.connect()
  //   const spaces =  await client.query('SELECT name FROM spaces')
  //   await client.end()
  //   return spaces;
  // }

  space.getSpaces().then(function(spaces) {
    res.render('spaces', {
      title: 'MakersBnB',
      spaces: spaces.rows
    })
  })
});

module.exports = router;
