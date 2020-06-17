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
  const spaces =  await client.query('SELECT name FROM spaces')
  return spaces;
}


exports.add = add;
exports.getSpaces = getSpaces;
