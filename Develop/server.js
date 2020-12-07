
var express = require("express");
var app = express();
var PORT = 3000;
var htmlroute = require("./routes/htmlroutes");
var apiroute = require ("./routes/apiroutes");

// Sets up the Express app to handle data parsing, adding middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use("/",htmlroute);
app.use("/api",apiroute);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


