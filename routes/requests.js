var express = require('express');
var router = express.Router();
var space = require('../spaceModel');


router.get('/', function (req, res, next) {
  console.log(space.getRequests(req.session.user))
  
  
  
  // .then( function(space_data){
  //   console.log('WORKS YAYAYA')
  //   res.redirect('/spaces') })
  //   //res.render('bookingpage', { dates: space_data }); })
});

module.exports = router;
