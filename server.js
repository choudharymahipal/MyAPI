require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes start with /api/auth/...
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => res.send("Server is working"));

// port is hardcoded to 3000 because 3306 is the default port for MySQL
const PORT = 3000;//process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));