var express = require('express');
var router = express.Router();
const { client } = require("../dbConfig");

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.render('spaces', { title: 'MakersBnB' });
});


router.post('/',(req,res) => {

  const { client } = require('../dbConfig')
  // const client = new Client()
  // client.connect()
  client.query("SELECT * FROM users WHERE username = $1", ['elonmusk'], (err, res) => {
    if (err) throw err
    console.log(res)
    client.end()
  })
  console.log(req.body);
    console.log(res.row);
  res.redirect('/users')
});

module.exports = router;
