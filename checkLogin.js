const { client } = require("./dbConfig");


  const checkLogin = (username, password,res) => {
    client.query(
      'SELECT * FROM users WHERE username = $1 AND password = $2',
      [username, password],
      (err, response) => {
         ////number of matches. Must be unique.
        if (response.rows.length === 1) {
            console.log('LOGIN SUCCESS');
          res.redirect('/spaces'); //if successful redirect to spaces.
        } else {
          res.redirect('/login'); // if unsuccessful redirect to login route. 
          console.log('LOGIN FAIL');
        }
      }
    );
  };

 exports.checkLogin = checkLogin;

 //Exported module used during Login in login route. 