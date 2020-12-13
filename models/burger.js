//import orm.js ORMs
var orm = require("../config/orm.js");
//burgers models for each ORM function in orm.js
var burgers = {
    //model for selectAll orm
  selectAll: function(cb1) {
    orm.all("cats", function(res) {
      cb1(res);
    });
  },
  //model for insertOne orm
  insertOne: function(cols, vals, cb2) {
    orm.create("burgers", cols, vals, function(res) {
      cb2(res);
    });
  },
  //model for updateOne orm
  updateOne: function(objColVals, condition, cb3) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb3(res);
    });
  }
};

//export models to burger_controllers.js
module.exports = burgers;
