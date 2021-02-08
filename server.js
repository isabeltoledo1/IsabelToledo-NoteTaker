const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const apiroutes = require("./routes/apiroutes");
const htmlroutes = require("./routes/htmlroutes");

// Sets up the Express app to handle data parsing, adding middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(apiroutes);
app.use(htmlroutes);

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
