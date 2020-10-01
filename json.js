const fs = require('fs');

let originalNote = {
  title: 'Some title',
  body: 'Some body'
};

let res = JSON.stringify(originalNote);

// console.log(res);

let originalNoteString = JSON.stringify(originalNote);

try {
  fs.writeFileSync('notes.json', originalNoteString);
  console.log('Successful');
} catch (error) {
  console.log(error);
}

let noteString = fs.readFileSync('notes.json');

let note = JSON.parse(noteString);
console.log(typeof note);
console.log('Note: ', note);
console.log(note.title);


