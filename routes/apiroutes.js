// Dependencies
//* The following API routes should be created:
var fs = require("fs");
var path = require("path")
var notes = require("../db/db.json");
var notePad = require("../db/post");
var router = require("express").Router();
const { uuid } = require("uuidv4");

//* GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

router.get("/api/notes", function (req, res) {
  notePad.getNote().then(function (data) {
    console.log(data);
    return res.json(data);
  });
});

//* POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file,
//and then return the new note to the client.

router.post("/api/notes", function (req, res) {
  console.log(req.body);
  notes.push({ ...req.body, id: uuid() });
  fs.writeFile("./db/db.json", JSON.stringify(notes), function (err, log) {
    if (err) {
      throw err;
    } else {
      res.json(true);
    }
  });
});

//* DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll
//need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all
//notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.


// router.delete("/api/notes/:id", function (req, res) {
//   // ':id' is a parameter in the express route
//   const id = req.params.id;
//   console.log(id);
//   fs.readFile("./db/db.json")
//   const db = require ("../db/db.json")
//   let arr = new Array
//   for ( var i = 0; i <= db.length-1; i++){
//     console.log(db[i].id === id);
//     if (db[i].id !== id){
//       arr.push(db[i])
//     }
//  }
//   console.log(arr)

//   fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(arr, null, 2), (err) => {
//    if (err) throw err
// });
//   return res.json(arr);
// });




module.exports = router;