var express = require('express');
var router = express.Router();
var space = require('../spaceModel');

router.post('/:id', function (req, res, next) {
  space.booking(req.params.id, req.session.user)
  .then( function() {
    space.book(req.params.id);
    res.redirect('/spaces');
  });
  
});

router.get('/', function (req, res, next) {
  space.getDates(req.params.id).then( function(space_data){
    console.log('WORKS YAYAYA')
    res.redirect('/spaces') })
    //res.render('bookingpage', { dates: space_data }); })
});

module.exports = router;
