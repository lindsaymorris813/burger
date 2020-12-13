const express = require('express');
//set handlebars
const exphbs = require("express-handlebars");
//import routes from controller
const routes = require("./controllers/burger_controllers");

const app = express();
//set port
const PORT = process.env.PORT || 8080;
//static content (css/js)
app.use(express.static("public"));
//json parse middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//set handlebars view engine and template
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//use routes
app.use(routes);
//start server to listen to port
app.listen(PORT, function() {
   //log when server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

  