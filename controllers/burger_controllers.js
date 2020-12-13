var express = require("express");

var router = express.Router();

// import models burger.js
var burgers = require("../models/burger.js");

// create routes for selectAll, insertOne, and updateOne and data
//route to populate all data from burgers table
router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    //create object to hold burgers table data
    var burgerObj = {
      burgers: data
    };
    //render burgers table data into index handlebars template
    res.render("index", burgerObj);
  });
});
//route to post data to burgers table (insert row)
router.post("/api/burgers", function(req, res) {
  burgers.insertOne([
    "burger_name", "devoured" 
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result) {
    // send back data of burger by ID
    res.json({ id: result.insertId });
  });
});
//update burger (to devoured)
router.put("/api/burgers/:id", function(req, res) {
    //get value of burger id to update
  var burgerID = "id = " + req.params.id;
    //update devoured to true of burgerID burger
  burgers.updateOne({
    devoured: req.body.devoured
  }, burgerID, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// export routes for server.js
module.exports = router;
