var mysql = require("mysql");
const express = require('express');
const app = express()

const PORT = process.env.PORT || 8080;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: '',
      database: 'animals_db'
  }); 
}
// connect to database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

app.listen(PORT, function() {
  console.log('Server running on http://localhost:' + PORT);
})

// export connection for use in orm.js
module.exports = connection;
