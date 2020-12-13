//MySQL connection
const connection = require('./connection.js');

  // ORM for SQL functions
  var orm = {
      //ORM pulling all values of burgers table
    selectAll: function(table, cb1) {
      var queryAll = "SELECT * FROM " + table + ";";
      connection.query(queryAll, function(err, result) {
        if (err) {
          throw err;
        }
        cb1(result);
      });
    },
    //ORM to create/insert a new row in burgers table
    insertOne: function(table, cols, vals, cb2) {
      var queryInsert = `INSERT INTO + ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`

      connection.query(queryInsert, vals, function(err, result) {
        if (err) {
          throw err;
        }
        cb2(result);
      });
    },
    //ORM to update a burger in burgers table
    updateOne: function(table1, updateObj, condition, cb3) {
      var queryUpdate = `UPDATE + ${table1} SET ${objToSql(updateObj)} WHERE ${condition}`;
  
      connection.query(queryUpdate, function(err, result) {
        if (err) {
          throw err;
        }
        cb3(result);
      });
    }
  };

  // Export the ORM for models burgers.js
module.exports = orm;