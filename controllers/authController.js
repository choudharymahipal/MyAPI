const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

// Register user
exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = await User.findByEmail(email);
  if (existingUser) return res.status(400).json({ message: "User already exists" });
  await User.createUser(name, email, password);
  res.status(201).json({ message: "User registered successfully" });
};

// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findByEmail(email);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
};