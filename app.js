console.log("Starting app.js");

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes')

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
}

let argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv; 
let command = argv._[0]
console.log(`Note Command: ${command}`);
// console.log(process.argv);
// console.log(`Yargs: ${argv.title}`);

if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body);
  let message = note ? note : 'Note title already exists.';
  console.log(message);

} else if (command === 'list') {
  let allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`)
  console.log(allNotes);
} else if (command === 'read') {
  let readNote = notes.getNote(argv.title);
  let message = readNote ? readNote : 'Note not found';
  
  console.log(message);
} else if (command === 'remove') {
  let noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);

} else {
  console.log('Command not recognized');
}


 

// try {
//   fs.appendFileSync('greetings.txt', `His grace is sufficient for ${user.username}\n`);
//   console.log('Data was successfully appended');
// } catch (error) {
//   console.log(error);
// }

