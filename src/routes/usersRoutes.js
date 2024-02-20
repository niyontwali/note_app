// import express
const express = require("express");
const {
  getUsers,
  getSingleUser,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");

// define router // creating an instance of Router
const router = express.Router();

// get users route
router.get("/", getUsers);

// get single user
router.get("/:userId", getSingleUser);
// localhost:port/users/844

// add user
router.post("/", addUser);

// update user
router.put("/:userId", updateUser);

// delete user
router.delete("/:userId", deleteUser);

// export the router
module.exports = router;
