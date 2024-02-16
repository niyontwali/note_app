let notes = []

// Fetching all notes
const getNotes = (req, res) => {
  return res.status(200).json({
    data: notes,
  });
};

// fething a single note
const getSingleNote = (req, res) => {
  // get our note id

  const noteId = parseInt(req.params.noteId);

  // Use the noteId to find a note with that id
  const oneNote = notes.find((note) => {
    return note.id === noteId;
  });

  console.log(oneNote);

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
const addNote = (req, res) => {
  // get your body element/field
  const { title, content } = req.body;
  /**
   * The above is the same as below
   * const title = req.body.title <=> const {title} = req.body
   * const content = req.body.cont <=> const {content} = req.body
   */

  // define the new id
  const id = notes.length + 1;

  // now our note will be this
  const newNote = {
    id,
    title,
    content,
  };

  // push now the new note into notes
  notes.push(newNote);

  // return to the user a message
  res.status(201).json({
    message: "A new has been created",
    data: notes,
  });
};

// delete
const deleteNote = (req, res) => {
  // get the id from the params
  const { noteId } = req.params;
  const id = parseInt(noteId)

  // use the id above to look for a note matching that id
  const noteToDeleteIndex = notes.findIndex((note) => {
    return note.id === id
  })

  notes.splice(noteToDeleteIndex, 1)

  return res.status(200).json({
    message: "Successfully deleted",
    data: notes
  })


  console.log(noteToDeleteIndex)

  

  
};

module.exports = { getNotes, getSingleNote, addNote, deleteNote };
