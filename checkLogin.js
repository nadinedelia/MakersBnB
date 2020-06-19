const { client } = require('./dbConfig');

async function checkLogin(username, password, res) {
  const toReturn = await client.query(
    'SELECT * FROM users WHERE username = $1 AND password = $2',
    [username, password]
  );
  console.log(toReturn);
  return toReturn;
}

exports.checkLogin = checkLogin;

//Exported module used during Login in login route.
