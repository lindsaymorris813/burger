//MySQL connection
const connection = require('./connection.js');
//objToSql from catsApp exercise
//Helper functions to pass question marks and to convert object key/value pairs to SQL syntax
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}
function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

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
      var queryInsert = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`

      connection.query(queryInsert, vals, function(err, result) {
        if (err) {
          throw err;
        }
        cb2(result);
      });
    },
    //ORM to update a burger in burgers table
    updateOne: function(table1, updateObj, condition, cb3) {
      var queryUpdate = "UPDATE " + table1;
      queryUpdate += " SET ";
      queryUpdate += objToSql(updateObj);
      queryUpdate += " WHERE ";
      queryUpdate += condition;
      console.log(queryUpdate);
      connection.query(queryUpdate, function(err, result) {
        if (err) {
          throw err;
        }
        cb3(result);
      });
    }
  };

  // Export the ORM for models burger.js
module.exports = orm;