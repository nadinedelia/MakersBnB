const { client } = require("./dbConfig");

const spaceAdd = (name) => {
    const text = {
        text: 'INSERT INTO spaces (name) VALUES($1)',
        values: [name],
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

 exports.spaceAdd = spaceAdd;
