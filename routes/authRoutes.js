const express = require("express");
const { register, login } = require("../controllers/authController");
const { fetchAllDeathRecords } = require("../controllers/deathController");
const router = express.Router();

// http://localhost:3000/api/auth/register
router.post("/register", register);

// http://localhost:3000/api/auth/login
router.post("/login", login);

// Fetch all death registration records
// http://localhost:3000/api/auth/death-records
router.get("/death-records", fetchAllDeathRecords);

module.exports = router;