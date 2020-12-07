
//Must first include path package to get correct file path
var path = require("path");
var app = require("express").Router();

// HTML GET requests 
// GET `/notes` - Should return the `notes.html` file
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

// GET `*` - Should return the `index.html` file 
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  
  
module.exports = app;
