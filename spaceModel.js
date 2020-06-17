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


=======
>>>>>>> 2475516fb03b2ad73287d3fd016eb3df7252f68c
exports.add = add;
exports.getSpaces = getSpaces;
