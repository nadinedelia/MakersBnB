const { client } = require("./dbConfig");



const getName = (first_name, last_name, email) => {
    const text = {
        text: 'INSERT INTO users(first_name, last_name, email) VALUES($1, $2, $3) RETURNING id, first_name, last_name, email',
        values: [first_name, last_name, email],
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
