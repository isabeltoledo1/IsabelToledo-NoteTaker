var fs = require("fs");
var util = require("util");
var readNotes = util.promisify(fs.readFile);

class Notepad {
  read() {
    return readNotes("./db/db.json", "utf8");
  }
  getNote() {
    return this.read().then((note) => {
      var notesArray;
      try {
        notesArray = [].concat(JSON.parse(note));
      } catch (err) {
        notesArray = [];
      }
      return notesArray;
    });
  }
}

module.exports = new Notepad();
