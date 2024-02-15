// import express
const express = require('express');
const {
  getNotes,
  getSingleNote,
  addNote,
} = require("../controllers/notesController");

// define router // creating an instance of Router 
const router = express.Router()

// get notes route
router.get("/" , getNotes )

// get one note
router.get("/:noteId", getSingleNote)

// add note
router.post("/", addNote)

// export the router
module.exports = router 

