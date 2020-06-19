const { client } = require('./dbConfig');

function fillUsersTable(first_name, last_name, email, username, password, id) {
  const text = {
    text:
      'INSERT INTO users(first_name, last_name, email, username, password, id) VALUES($1, $2, $3, $4, $5, $6)',
    values: [first_name, last_name, email, username, password, id],
  };
  client.query(text);
}

function fillSpacesTable(name, description, price, owner_id, date) {
  const text = {
    text:
      'INSERT INTO spaces(name, description, price, owner_id, date) VALUES($1, $2, $3, $4, $5)',
    values: [name, description, price, owner_id, date],
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
exports.fillSpacesTable = fillSpacesTable;
exports.clearTestDb = clearTestDb;
