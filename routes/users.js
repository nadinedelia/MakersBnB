var express = require('express');
var router = express.Router();
const { client } = require('../dbConfig');
var user = require('../addUsers');

router.get('/', function (req, res, next) {
  res.send(' nodemon --exec npm start  ');
});


module.exports = router;
