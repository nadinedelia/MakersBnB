var express = require('express');
var router = express.Router();
const { client } = require('../dbConfig');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('spaces', { title: 'MakersBnB' });
});

router.post('/', (req, res) => {
  const { client } = require('../dbConfig');
  // const client = new Client()
  // client.connect()
  client.query(
    'SELECT * FROM users WHERE username = $1 AND password = $2',
    [req.body.username, req.body.password],
    (err, response) => {
      console.log(response.rows.length); ////number of matches. Must be unique.
      // console.log(err);
      // console.log(err ? err.stack : response.rows);
      if (response.rows.length === 1) {
        res.redirect('/spaces');
      } else {
        res.redirect('/login');
      }
    }
  );
});

module.exports = router;
