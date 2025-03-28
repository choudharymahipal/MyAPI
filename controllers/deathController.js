const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Fetch all death registration records
exports.fetchAllDeathRecords = async (req, res) => {
  try {
    // Extract the token from the Authorization header
    const token = req.headers.authorization.split(" ")[1];
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // If the token is invalid, return an error
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    // Fetch all death records
    const records = await User.AllDeathRecords();
    res.status(200).json(records);
  } catch (error) {
    // Log the error and return a 500 status code
    console.error("Error fetching death records:", error);
    res.status(500).json({ message: "Failed to fetch death records" });
  }
};

exports.saveNewRegistration = async (req, res) => {
  try {
    // Extract the token from the Authorization header
    const token = req.headers.authorization.split(" ")[1];
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // If the token is invalid, return an error
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    await User.deathRegistration(req.body);
    res.status(201).json({ message: "User registered successfully" });
  }
  catch (error) {
    // Log the error and return a 500 status code
    console.error("Error: Failed to save death records", error);
    res.status(500).json({ message: "Failed to save death records" });
  }
};

exports.deleteDeathRegistration = async (req, res) => {
  try {
    // Extract the token from the Authorization header
    const token = req.headers.authorization.split(" ")[1];
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // If the token is invalid, return an error
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { id } = req.params; // Get the ID from the request parameters
    const result = await User.deleteDeathRecordById(id); // Call the model function to delete the record

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.status(200).json({ message: "Record deleted successfully" });
  } catch (error) {
    console.error("Error deleting death record:", error);
    res.status(500).json({ message: "Failed to delete death record" });
  }
};