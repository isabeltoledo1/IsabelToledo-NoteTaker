// Dependencies
//* The following API routes should be created:
var fs = require("fs");
var notes = require("../db/db.json");
var notePad = require ("../db/post");
var app = require("express").Router();
var PORT = 3000;
const { uuid } = require('uuidv4');



 
//* GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
 
  app.get("/api/notes", function(req, res) {
   notePad.getNote().then(function(data){
     console.log(data)
    return res.json(data);
   });
  });

//* POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, 
//and then return the new note to the client.

  //app.post("/api/notes", function(req, res) {
    // var saveNote = req.body;
    // notes.push(saveNote);
       // res.send(saveNote);
     // });
      
      app.post("/api/notes", function(req, res){
        console.log(req.body)
        notes.push({...req.body, id:uuidv4()})
        fs.writeFile("db/db.json", JSON.stringify(saveNote), function(err, log){
            if (err){
                throw err
            } else {
                res.json(true)
            }
        })
    });
//* DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll 
//need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all 
//notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

//The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

  //app.delete("/api/notes:id", function(req, res){


  //});

 // app.listen(PORT, function() {
    //console.log("App listening on PORT " + PORT);
  //});
  
  module.exports = app;


