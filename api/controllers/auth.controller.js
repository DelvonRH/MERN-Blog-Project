import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  /* After ES6 we don't have to do username: username, etc anymore since the key name is  similar to the value name.*/
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json("User Saved!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
