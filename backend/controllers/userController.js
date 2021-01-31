import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
//using async handler instead of a try-catch block

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
    throw new Error('Use not found!');
  }
});

export { authUser, getUserProfile };
