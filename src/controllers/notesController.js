const { Note } = require("../database/models");

let notes = [];

// Fetching all notes
const getNotes = async (req, res) => {
  // fetch notes from our db using model Note
  const data = await Note.findAll();
  return res.status(200).json({
    data,
  });
};

// fething a single note
const getSingleNote = async(req, res) => {
  // get our note id
  const noteId = parseInt(req.params.noteId);

  // Use the noteId to find a note with that id
  const oneNote = await Note.findByPk(noteId);

  if (!oneNote) {
    // if it is undefined
    return res.status(404).json({
      message: `Note with id: ${noteId} was not found`,
    });
  }

  res.status(200).json({
    data: oneNote,
  });
};

// add note
const addNote = async (req, res) => {
  // get your body element/field
  const { title, content } = req.body;

  const noteExists = await Note.findOne({ where: { title } });

  if (noteExists) {
    return res.status(400).json({
      message: `Note with title : ${title} already exists`,
    });
  }

  // create a new note
  const newNote = await Note.create({
    title,
    content,
  });

  // return to the user a message
  res.status(201).json({
    message: "A new has been created",
    data: newNote,
  });
};

// delete
const deleteNote = (req, res) => {
  // get the id from the params
  const { noteId } = req.params;
  const id = parseInt(noteId);

  // use the id above to look for a note matching that id
  const noteToDeleteIndex = notes.findIndex((note) => {
    return note.id === id;
  });

  notes.splice(noteToDeleteIndex, 1);

  return res.status(200).json({
    message: "Successfully deleted",
    data: notes,
  });

  console.log(noteToDeleteIndex);
};

module.exports = { getNotes, getSingleNote, addNote, deleteNote };
