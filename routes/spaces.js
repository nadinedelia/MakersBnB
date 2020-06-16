var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.render('spaces', { title: 'MakersBnB' });
});


router.post('/',(req,res) => {

  const { Client } = require('pg')
  const client = new Client()
  client.connect()
  client.query('SELECT $1::text as first_name', [req.body.username], (err, res) => {
    if (err) throw err
    console.log(res)
    client.end()
  })
  console.log(req.body);
  res.redirect('/users')
});

module.exports = router;
