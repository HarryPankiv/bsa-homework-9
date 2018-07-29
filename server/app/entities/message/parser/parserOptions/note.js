const randomReqHandler = require('./randomQuery');

module.exports = function note(message) {
  let savePattern = /@bot Save note title:/;
  let showNotePattern = /@bot Show note /;
  let showNoteListPattern = /@bot Show note list/;
  let deleteNotePattern = /@bot Delete note: /;
  if (savePattern.test(message)) {
    return saveNote(message);
  } else if (showNoteListPattern.test(message)) {
    return showNoteList();
  } else if (showNotePattern.test(message)) {
    return showNote(message);
  } else if (deleteNotePattern.test(message)) {
    return deleteNote(message);
  }
  return randomReqHandler();
};

notes = [];

function saveNote(message) {
  let patternTitle = /(title: )(.+)( body:)/;
  let patternBody = /( body: )(.+)/;
  if (patternTitle.exec(message) === null || patternBody.exec(message) === null) {
    return 'Can\'t save this request';
  }
  let title = patternTitle.exec(message)[2];
  let body = patternBody.exec(message)[2];
  notes.push({title, body});
  return `Saved note title: ${title}, body: ${body}`;
}

function showNote(message) {
  let pattern = /(note )(.+)/;
  if (pattern.exec(message) === null) {
    return 'Can\'t show this request';
  }
  let title = pattern.exec(message)[2];
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].title === title) {
      return `${notes[i].title}: ${notes[i].body}`
    }
  }
  return 'Note doesn\'t exit';
}

function showNoteList() {
  let noteList = '';
  notes.map( (el, i) => el.title ? noteList += (`${i + 1}) ${notes[i].title}; `) : '')
  if (noteList === '') {
    return 'Note list is empty';
  }
  return noteList;
}

function deleteNote(message) {
  let pattern = /(@bot Delete note: )(.+)/;
  if (pattern.exec(message) === null) {
    return 'Can\'t delete that request';
  }
  let title = pattern.exec(message)[2];
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].title === title) {
      notes.splice(i, 1);
      return 'Note was deleted';
    }
  }
  return 'Note doesn\'t exit';
}
