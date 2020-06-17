var express = require('express');
var router = express.Router();
var space  = require("../spaceModel");

router.get('/', function(req, res, next) {
<<<<<<< HEAD
<<<<<<< HEAD
  var spaces

  spaces = space.list()
  console.log(spaces)

  res.render('spaces', {
    title: 'MakersBnB',
    spaces: spaces
  });

});
=======
  
  // const {Client} = require('pg')
  // const client = new Client({
  //   database: 'testdb',
  // });
>>>>>>> 9639cc7ea668ad0c79265f1e7e279e269704a6a8

  // async function getSpaces() {
  //   await client.connect()
  //   const spaces =  await client.query('SELECT name FROM spaces')
  //   await client.end()
  //   return spaces;
  // }

=======
>>>>>>> 2475516fb03b2ad73287d3fd016eb3df7252f68c
  space.getSpaces().then(function(spaces) {
    res.render('spaces', {
      title: 'MakersBnB',
      spaces: spaces.rows
    })
  })
});

module.exports = router;
