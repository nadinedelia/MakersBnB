const { client } = require("./dbConfig");

const add = function(name) {
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

const book = function(id) {
  const text = {
    text: 'DELETE FROM spaces WHERE id = $1',
    values: [id],
  }
  client.query(text, (err) => {
    if (err) {
      console.log(err.stack);
    }
  });
}

async function getSpaces() {
  const spaces =  await client.query('SELECT id, name FROM spaces')
  return spaces;
}

exports.add = add;
exports.getSpaces = getSpaces;
exports.book = book;
