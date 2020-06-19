const { client } = require('./dbConfig');

function fillUsersTable(first_name, last_name, email, username, password) {
  const text = {
    text:
      'INSERT INTO users(first_name, last_name, email, username, password) VALUES($1, $2, $3, $4, $5) RETURNING id, first_name, last_name, email, username,password',
    values: [first_name, last_name, email, username, password],
  };
  client.query(text);
}

function clearTestDb() {
  const text = {
    text: 'TRUNCATE TABLE users, spaces, bookings',
  };
  client.query(text);
}

exports.fillUsersTable = fillUsersTable;
exports.clearTestDb = clearTestDb;
