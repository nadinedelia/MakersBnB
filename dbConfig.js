////Database setup.

const { Client } = require('pg');

const client = new Client({
  database: 'makersbnb',
});
client.connect();

// console.log(client);
module.exports = { client };
