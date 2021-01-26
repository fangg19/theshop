import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
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
      token: null,
    });
  } else {
    res.status(401);
    throw new Error('Invalid e-mail or/and password.');
  }
});

export { authUser };
