const bcrypt = require("bcrypt")
const { User } = require("../database/models");

// Fetching all users
const getUsers = async (req, res) => {
  // fetch users from our db using model User
  const users = await User.findAll();
  return res.status(200).json({
    data: users,
  });
};

// fething a single user
const getSingleUser = async (req, res) => {
  // get user id
  const userId = parseInt(req.params.userId);

  // Use the userId to find a user with that id
  const oneUser = await User.findByPk(userId);
  // alternative:  const oneUser = await User.findOne({where: {userId}})

  if (!oneUser) {
    // if there is no user or if oneUser is undefined
    return res.status(404).json({
      message: `User with id: ${userId} was not found`,
    });
  }

  // return the data of oneUser
  return res.status(200).json({
    data: oneUser,
  });
};

// add user
const addUser = async (req, res) => {
  // get your body element/field
  const { fullName, email, password } = req.body;

  const userExists = await User.findOne({ where: { email } });


  if (userExists) {
    return res.status(400).json({
      message: `User with email : ${email} already exists`,
    });
  }

  // hash the password
  const hashedPassword = bcrypt.hashSync(password, parseInt(process.env.SALT));

  // create a new user
  const newUser = await User.create({
    fullName,
    email,
    password: hashedPassword
  });

  // return to the user a message
  res.status(201).json({
    message: "A user has been created",
    data: newUser,
  });
};

// update user
const updateUser = async (req, res) => {
  // get id from params
  const { userId } = req.params;
  const id = parseInt(userId);

  // provide a body for the items to be updated
  const { fullName } = req.body;

  // get a user with that id
  const oneUser = await User.findByPk(id);

  if (!oneUser) {
    return res.status(404).json({
      message: `User with id: ${id} not found`,
    });
  }

  // use that user to identify field from your body that you need to update
  if (fullName) {
    oneUser.fullName = fullName;
  }

  // save your user
  await oneUser.save();

  // communicate to your user
  return res.status(200).json({
    message: "User Information updated successfully",
  });
};

// delete
const deleteUser = async (req, res) => {
  // get the id from the params
  const { userId } = req.params;
  const id = parseInt(userId);

  // get a user with the id
  const oneUser = await User.findByPk(id);

  // if the user is not found
  if (!oneUser) {
    return res.status(404).json({
      message: `User with id: ${id} is not found`,
    });
  }

  // delete the user
  await oneUser.destroy();

  // show a message to the user
  return res.status(200).json({
    message: "User deleted successfully",
  });
};

module.exports = { getUsers, getSingleUser, addUser, updateUser, deleteUser };
