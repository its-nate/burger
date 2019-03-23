// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;

// Create instance of app
var app = express();

// Server static files
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars as default engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Start servers
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});