const { client } = require("../../dbConfig");

class Space {
  constructor(client) {
    this.client = client
  }

  add(name) {
    db_connect(`INSERT INTO spaces (name) VALUES ('${name}')`)
  }

  list() {
    db_connect(`SELECT name FROM spaces`)
  }

  dbConnect(string) {
    console.log(string)
    this.client.query(string, function(err, res) {
      /*if (err) {
        console.log(err.stack);
      } else {
       return res.rows;
     } */

   });
    console.log(string)
  }
}
