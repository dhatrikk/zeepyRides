const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator");
require("dotenv").config();

const userLogin = async function (req, res) {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Find user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Create JWT token
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        name: user.name,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const userRegister = async function (req, res) {
  try {
    const { name, dob, sex, email, password } = req.body;

    // Basic required check
    if (!name || !dob || !sex || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Email validation
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email syntax" });
    }

    // Strong password check
    if (!validator.isStrongPassword(password)) {
      return res.status(400).json({
        message:
          "Password must be strong (include upper, lower, number, symbol, and be at least 8 characters)",
      });
    }

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the user
    const newUser = new userModel({
      name: name,
      dob: dob,
      sex: sex,
      email: email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const userProfile = async function (req, res) {
    try {
      // Get token from Authorization header
      const authHeader = req.headers.authorization;
  
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Authorization token missing or malformed" });
      }
  
      const token = authHeader.split(" ")[1];
  
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
      // Fetch user from DB
      const user = await userModel.findById(decoded.userId).select("-password");
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json({ user });
  
    } catch (error) {
      console.error("Profile Error:", error);
      res.status(401).json({ message: "Invalid or expired token" });
    }
  };

module.exports = { userLogin, userRegister, userProfile };
