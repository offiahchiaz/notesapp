console.log('Starting notes.js');

const fs = require('fs');

let fetchNotes = () => {
  try {
    //This is the string version as we haven't passed through JSON.parse
    let noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  } catch (error) {
    return [];
  }
};

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };

  let duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);

    return note;
  }

};

const getAll = () => {
  return fetchNotes();
};

const getNote = (title) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note) => {
    return note.title === title;
  });

  return filteredNotes[0];
};

const removeNote = (title) => {
  let notes = fetchNotes();

  let filteredNotes = notes.filter((note) => {
    return note.title !== title;
  });

  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};