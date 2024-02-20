const { Note } = require("../database/models");

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
  // get note id
  const noteId = parseInt(req.params.noteId);

  // Use the noteId to find a note with that id
  const oneNote = await Note.findByPk(noteId);
  // alternative:  const oneNote = await Note.findOne({where: {nodeId}})

  if (!oneNote) {
    // if there is no note or if oneNote is undefined
    return res.status(404).json({
      message: `Note with id: ${noteId} was not found`,
    });
  }

  // return the data of oneNote
  return res.status(200).json({
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

// update notes
const updateNote = async (req, res) => {
  // get id from params
  const {noteId} = req.params
  const id = parseInt(noteId)

  // provide a body for the items to be updated
  const {title, content } = req.body

  // get a note with that id
  const oneNote = await Note.findByPk(id);

  if (!oneNote) {
    return res.status(404).json({
      message: `Note with id: ${id} not found`
    })
  }

  // use that note to identify field from your body that you need to update
  if (title ) {
    oneNote.title = title
  }

  if (content) {
    oneNote.content = content 
  }

  // save your notes
  await oneNote.save()

  // communicate to your user
  return res.status(200).json({
    message: "Successfully updated Note",
  });
}


// delete
const deleteNote = async (req, res) => {
  // get the id from the params
  const { noteId } = req.params;
  const id = parseInt(noteId);

  // get a note with the id
  const oneNote = await Note.findByPk(id)

  // if the note is not found
  if (!oneNote) {
    return res.status(404).json({
      message: `Note with id: ${id} is not found`
    })
  }

  // delete the note
  await oneNote.destroy()

  // show a message to the user
  return res.status(200).json({
    message: "Successfully deleted",
  });

};


module.exports = { getNotes, getSingleNote, addNote, updateNote, deleteNote };
