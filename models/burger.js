//import orm.js ORMs
var orm = require("../config/orm.js");
//burgers models for each ORM function in orm.js
var burgers = {
    //model for selectAll orm
  selectAll: function(cb1) {
    orm.selectAll("burgers", function(res) {
      cb1(res);
    });
  },
  //model for insertOne orm
  insertOne: function(cols, vals, cb2) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb2(res);
    });
  },
  //model for updateOne orm (to devoured)
  updateOne: function(objColVals, condition, cb3) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb3(res);
    });
  }
};

//export models to burger_controllers.js
module.exports = burgers;
