////Database setup.

const { Client } = require('pg');
require('dotenv').config();
console.log(process.env.DB_NAME);
const client = new Client({
  database: process.env.DB_NAME,
});
client.connect();

// console.log(client);
module.exports = { client };
