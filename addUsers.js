const { client } = require("./dbConfig");


async function getName(first_name, last_name, email, username, password) {
  const text = {
    text: 'INSERT INTO users(first_name, last_name, email, username, password) VALUES($1, $2, $3, $4, $5) RETURNING id, first_name, last_name, email, username,password',
    values: [first_name, last_name, email, username, password],
  }
  const to_return = await client.query(text);
  return to_return.rows[0];
}    

 exports.getName = getName;
