// import express
const express = require("express");

// import helmet
const helmet = require("helmet")

// import cors
const cors = require("cors");

// file imports
const noteRoute = require("./routes/notesRoutes");
const userRoute = require("./routes/usersRoutes");
const authRoute = require("./routes/authRoutes");

// imports for db
const { sequelize } = require("./database/models");

// import dotenv
require("dotenv").config();

// initializing/invoking/calling express object/function
const app = express();

// use body parser from expres
app.use(express.json())

// use cors
app.use(cors());
// use hemlmet
app.use(helmet())

// root endpoint
// app which is the invocation of express() has
// a properties of all methods (get, post, put/patch and delete)
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Welcome to the Note App Project APIs",
  });
});

// all routes
app.use("/notes", noteRoute); // localhost:8080/notes
app.use("/users", userRoute); // localhost:8080/users
app.use("/auth", authRoute); // localhost:8080/auth

// not found
app.get("*", (req, res) => {
  return res.status(404).json({
    message: "Not found",
  });
});

// define your port and host
const { PORT, HOST } = process.env;

// connect database
const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('DB connected successfully')

  } catch (error) {
    console.log(error);
  }
}

// listening to server
app.listen(PORT, async () => {
  await dbConnection()
  console.log(`Server running at ${HOST}:${PORT}`);
  // localhost:8089
});
