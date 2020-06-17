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

async function getSpaces() {
  //await client.connect()
  const spaces =  await client.query('SELECT name FROM spaces')
  //await client.end()
  return spaces;
}


<<<<<<< HEAD
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
=======
>>>>>>> 9639cc7ea668ad0c79265f1e7e279e269704a6a8

exports.add = add;
exports.getSpaces = getSpaces;
