// import express
const express = require("express");
const {
  login
} = require("../controllers/authController");

// define router // creating an instance of Router
const router = express.Router();

// login route
router.post("/login", login); // localhost:8080/auth/login

module.exports = router

