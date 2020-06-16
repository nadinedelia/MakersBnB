////Database setup.

const { Client } = require('pg');

const client = new Client({
  database: 'testdb',
});
client.connect();

// console.log(client);
module.exports = { client };
