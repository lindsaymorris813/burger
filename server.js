const express = require('express');
const mysql = require('mysql');
const exphbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
