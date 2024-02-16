// import express
const express = require('express');
const {
  getNotes,
  getSingleNote,
  addNote,
  deleteNote,
} = require("../controllers/notesController");

// define router // creating an instance of Router 
const router = express.Router()

// get notes route
router.get("/" , getNotes )

// get single note
router.get("/:noteId", getSingleNote) 
// localhost:port/notes/844

// add note
router.post("/", addNote)

// delete note
router.delete("/:noteId", deleteNote )

// export the router
module.exports = router 

