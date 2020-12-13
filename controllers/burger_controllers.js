var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var cat = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  cat.all(function(data) {
    var burgerObj = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", burgerObj);
  });
});

router.post("/api/burgers", function(req, res) {
  cat.create([
    "burger_name", 
  ], [
    req.body.burger_name,
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var burgerID = "id = " + req.params.id;

  burger.update({
    devoured: req.body.devoured
  }, burgerID, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export Route for server.js to use
module.exports = router;
