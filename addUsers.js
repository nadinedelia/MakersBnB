const { client } = require("./dbConfig");



const getName = (name,email) => {
    const text = {
        text: 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING id, name, email',
        values: [name, email],
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




