const { client } = require("./dbConfig");

const add = (name) => {
    const text = {
    text: 'INSERT INTO spaces (name) VALUES($1)',
    values: [name],
    }
    client.query(text, (err) => {
      if (err) {
        console.log(err.stack);
      } 
    });
  };

  const list = () => {
    const text = {
    text: 'SELECT name FROM spaces',
    }
    var to_return = client.query(text, (err, res) => {
      if (err) {
        console.log(err.stack);
      } 
      return res.rows;
    });
    return to_return;
  };

 exports.add = add;
 exports.list = list;
