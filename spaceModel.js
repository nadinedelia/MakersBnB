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

  function list() {
    const textList = {
      text: 'SELECT name FROM spaces',
    }
    client.query(textList, (err, res) => {
      console.log(4)
      if (err) {
        console.log(err.stack);
      } else {
        console.log(res.rows, 1)
        return res.rows
      }
    });
    console.log(2)
    return ':('
  };

 exports.add = add;
 exports.list = list;
