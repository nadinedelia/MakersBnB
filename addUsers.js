const { client } = require("./dbConfig");



const getName = (first_name, last_name, email, username) => {
    const text = {
        text: 'INSERT INTO users(first_name, last_name, email, username) VALUES($1, $2, $3, $4) RETURNING id, first_name, last_name, email, username',
        values: [first_name, last_name, email, username],
      }

      //code to perform particular action.
      //To access POST variable use req.body()methods.
      client.query(text, (err, res) => {
        if (err) {
          console.log(err.stack);
        } else {
        //   console.log(res.rows);
        }
      });
  };

 exports.getName = getName;
