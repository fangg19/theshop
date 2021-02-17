import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
//using async handler instead of a try-catch block

//@desc     Register a new User
//@route    POST /api/users
//@access   Public
const registerUser = asyncHandler(async (req, res) => {
  //first we send the data to the body via a submit button on a form on front-end and the we access the data we send with req.body here in the backend;
  const { name, email, password } = req.body;

  //checking if the user exists and also if the entered password by the user is equal to the encrypted one we have in the database
  const userExists = await User.findOne({ email: email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists.');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data.');
  }
});

//@desc     Authenticate the user and get a token
//@route    POST /api/users/login
//@access   Public
const authUser = asyncHandler(async (req, res) => {
  //first we send the data to the body via a submit button on a form on front-end and the we access the data we send with req.body here in the backend;
  const { email, password } = req.body;

  //checking if the user exists and also if the entered password by the user is equal to the encrypted one we have in the database
  const user = await User.findOne({ email: email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid e-mail or/and password.');
  }
});

//@desc     get the user profile
//@route    GET /api/users/profile
//@access   Private
const getUserProfile = asyncHandler(async (req, res) => {
  //checking if the user exists and also if the entered password by the user is equal to the encrypted one we have in the database
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found!');
  }
});

//@desc     update the user profile
//@route    PUT /api/users/profile
//@access   Private
const updateUserProfile = asyncHandler(async (req, res) => {
  //checking if the user exists and also if the entered password by the user is equal to the encrypted one we have in the database
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.passwrod) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error('User not found!');
  }
});

//@desc     get all users
//@route    GET /api/users/
//@access   Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

//@desc     Delete user
//@route    DELETE /api/users/:id
//@access   Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: 'User removed' });
  } else {
    res.status(404);
    throw new Error('User not found.');
  }
});

export {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
};
