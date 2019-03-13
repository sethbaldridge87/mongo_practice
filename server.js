// See near the bottom of this file for your TODO assignments.
// Good luck!

// Dependencies
var express = require("express");
var mongojs = require("mongojs");

// Initialize Express
var app = express();

// Set up a static folder (public) for our web app
app.use(express.static("public"));

// Database configuration
// Save the URL of our database as well as the name of our collection
var databaseUrl = "hydro";
var collections = ["products"];

// Use mongojs to hook the database to the db variable
var db = mongojs(databaseUrl, collections);

// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// Root: Displays a simple "Hello World" message (no mongo required)
app.get("/", function(req, res) {
  res.send("Hello world");
});

// All: Send JSON response with all products
app.get("/all", function(req, res) {
  // Query: In our database, go to the products collection, then "find" everything
  db.products.find({}, function(err, data) {
    // Log any errors if the server encounters one
    if (err) {
      console.log(err);
    }
    else {
      // Otherwise, send the result of this query to the browser
      res.json(data);
    }
  });
});

// TODO: Implement the remaining two routes

// 1: Name: Send JSON response sorted by name in ascending order, e.g. GET "/name"

app.get("/name", function(req, res) {
    // Query: In our database, go to the products collection, then "find" everything
    db.products.find().sort({name:1}, function(err, data) {
      // Log any errors if the server encounters one
      if (err) {
        console.log(err);
      }
      else {
        // Otherwise, send the result of this query to the browser
        res.json(data);
      }
    });
  });

// 2: Weight: Send JSON response sorted by weight in descending order, , e.g. GET "/weight"

app.get("/weight", function(req, res) {
    // Query: In our database, go to the products collection, then "find" everything
    db.products.find().sort({weight:1}, function(err, data) {
      // Log any errors if the server encounters one
      if (err) {
        console.log(err);
      }
      else {
        // Otherwise, send the result of this query to the browser
        res.json(data);
      }
    });
  });

  app.get("/blast", function(req, res) {
    // Query: In our database, go to the products collection, then "find" everything
    db.products.find({purpose: "Hydroblaster"}, function(err, data) {
      // Log any errors if the server encounters one
      if (err) {
        console.log(err);
      }
      else {
        // Otherwise, send the result of this query to the browser
        res.json(data);
      }
    });
  });

  app.get("/kleen", function(req, res) {
    // Query: In our database, go to the products collection, then "find" everything
    db.products.find({purpose: "Hydrokleen"}, function(err, data) {
      // Log any errors if the server encounters one
      if (err) {
        console.log(err);
      }
      else {
        // Otherwise, send the result of this query to the browser
        res.json(data);
      }
    });
  });
// Set the app to listen on port 3000
const port = 3000;
app.listen(port, function() {
  console.log("App running on port " + port);
});
