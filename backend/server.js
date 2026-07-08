const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());

//parse incoming JSON request bodies. Else req.body would be undefined.
app.use(express.json());

// Routes
app.use("/students", studentRoutes);

// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});