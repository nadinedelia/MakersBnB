var express = require('express');
var router = express.Router();
const { client } = require("../dbConfig");
var user  = require("../addUsers");

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.send(' nodemon --exec npm start ');
});



router.post('/',(req,res) => {
  
user.getName(req.body.name, req.body.email); //uses addUsers.js module
//   const text = {
//     text: 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING id, name, email',
//     values: [req.body.name, req.body.email],
//   }
  
//   //code to perform particular action.
//   //To access POST variable use req.body()methods.
//   client.query(text, (err, res) => {
//     if (err) {
//       console.log(err.stack);
//     } else {
//       console.log(res.rows);
//     }
//   });
//   console.log(req.body);
//   res.redirect('/users')
});

module.exports = router;







// callback
