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

  client.query('SELECT name FROM spaces', (err, res) => {
    console.log(4)
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows, 1)
      return res.rows
    }
  });

  async function list() {
    const textList = {
      text: 'SELECT name FROM spaces',
    }
    let output = client.query(textList, (err, res) => {
      console.log(4)
      if (err) {
        console.log(err.stack);
      } else {
        console.log(res.rows, 1)
        return res.rows
      }
    });
    let result = await output
    console.log(result)
  };

 exports.add = add;
 exports.list = list;
