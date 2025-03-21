const express = require("express");
const { register, login } = require("../controllers/authController");
const { fetchAllDeathRecords, saveNewRegistration } = require("../controllers/deathController");
const router = express.Router();

// http://localhost:3000/api/auth/register
router.post("/register", register);

// http://localhost:3000/api/auth/login
router.post("/login", login);

// Fetch all death registration records
// http://localhost:3000/api/auth/death-records
router.get("/death-records", fetchAllDeathRecords);

// Save new death registration
// http://localhost:3000/api/auth/save
router.post("/save", saveNewRegistration);

module.exports = router;